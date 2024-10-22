import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
} from "../slices/CartSlice";
import Button from "../helpers/Button";
import "./Menu.css";

const MenuItem = ({ categoryId, contentId, item }) => {
  const { name, ingredients, price } = item;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(
    getCurrentQuantityById(categoryId, contentId)
  );
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      categoryId,
      contentId,
      name,
      unitPrice: price,
      totalPrice: price,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="item-list">
      <div className="item-details">
        <p className="item-name">{name}</p>
        <p className="item-ingredients">{ingredients.join(", ")}</p>
      </div>
      <div className="price-and-button">
        <p className="item-price">${price.toFixed(2)}</p>
        <div className="add-to-cart-buttons">
          {isInCart ? (
            <>
              <button
                className="quantity-button"
                onClick={() =>
                  dispatch(decreaseItemQuantity({ categoryId, contentId }))
                }
              >
                -
              </button>
              <p className="quantity-info">{currentQuantity}</p>
              <button
                className="quantity-button"
                onClick={() =>
                  dispatch(increaseItemQuantity({ categoryId, contentId }))
                }
              >
                +
              </button>
              <Button
                type="small"
                onClick={() => dispatch(deleteItem({ categoryId, contentId }))}
              >
                Delete
              </Button>
            </>
          ) : (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;

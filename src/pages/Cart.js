import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItem,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../slices/CartSlice";
import { getCart } from "../slices/CartSlice";
import "./Cart.css";
import Button from "../helpers/Button";
import { usePageContext } from "../contexts/PageContext";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart);
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle("Cart");
  }, [setPageTitle]);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                <div className="cart-item-info-top">
                  <div className="item-details">
                    {item.quantity}x {item.name}
                  </div>
                  <p className="item-price">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </p>
                  <div className="quantity-control">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        dispatch(
                          decreaseItemQuantity({
                            categoryId: item.categoryId,
                            contentId: item.contentId,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <p className="quantity-info">{item.quantity}</p>
                    <button
                      className="quantity-button"
                      onClick={() =>
                        dispatch(
                          increaseItemQuantity({
                            categoryId: item.categoryId,
                            contentId: item.contentId,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="delete-button-cart">
                  <Button
                    type="delete"
                    onClick={() =>
                      dispatch(
                        deleteItem({
                          categoryId: item.categoryId,
                          contentId: item.contentId,
                        })
                      )
                    }
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-actions">
          <Button to="/order/new" type="small" className="order-now-button">
            Order Now!
          </Button>
          <Button
            className="clear-cart-button"
            type="delete"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;

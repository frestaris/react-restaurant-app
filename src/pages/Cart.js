import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, clearCart } from "../slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Price: ${(item.unitPrice * item.quantity).toFixed(2)}
                </p>{" "}
                {/* Use unitPrice */}
                <button onClick={() => dispatch(deleteItem(item.id))}>
                  {" "}
                  {/* Pass item.id */}
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </div>
  );
};

export default Cart;

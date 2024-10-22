import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart, getTotalCartPrice } from "../slices/CartSlice";
import { formatDate, calcMinutesLeft } from "../helpers/functions";
import "./OrderReview.css";

const OrderReview = () => {
  const cartItems = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const navigate = useNavigate();
  const pickupTime = new Date(Date.now() + 45 * 60000);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  return (
    <div className="order-review-container">
      <div className="estimated-pickup">
        <span>
          Your Order will be ready in ({calcMinutesLeft(pickupTime)} minutes
          left)
        </span>
        <span>{formatDate(pickupTime)}</span>
      </div>

      <ul className="order-list">
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
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="summary">
        <p className="total-price">
          Total Price to be paid at the store: ${totalCartPrice.toFixed(2)}
        </p>
        <p>Check your Email for Order confirmation!</p>
      </div>
    </div>
  );
};

export default OrderReview;

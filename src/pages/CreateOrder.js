import React, { useState } from "react";
import "./CreateOrder.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartPrice, clearCart } from "../slices/CartSlice";
import Button from "../helpers/Button";
import GetDirectionsButton from "../helpers/GetDirectionsButton";
import { useNavigate } from "react-router-dom";

// Phone validation function
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const CreateOrder = () => {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "sdf",
    email: "sdf@gmail.com",
    phone: "123123",
  });
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPhoneError("");

    if (!isValidPhone(formData.phone)) {
      setPhoneError("Invalid phone number");
      setFormData({ ...formData, phone: "" });
      return;
    }
    // dispatch(clearCart());
    navigate("/order/review");
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="order-form-container">
      <h3>Ready to order? Let’s go!</h3>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <input
            placeholder="Name..."
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email..."
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Phone..."
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </div>
        <div className="total-price">
          <p>Total: ${totalCartPrice.toFixed(2)}</p>
        </div>
        <Button type="submit" className="submit-button">
          Place Order
        </Button>
      </form>
      <GetDirectionsButton />
    </div>
  );
};

export default CreateOrder;

import React, { useState } from "react";
import "./CreateOrder.css";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getCart } from "../slices/CartSlice";
import Button from "../helpers/Button";
import GetDirectionsButton from "../helpers/GetDirectionsButton";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const CreateOrder = () => {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cartItems = useSelector(getCart);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const formatCartItems = (items) => {
    let str = "";
    items.forEach((item) => {
      str += `${item.quantity} x ${item.name} at $${parseFloat(
        item.unitPrice
      ).toFixed(2)} each = $${(
        item.quantity * parseFloat(item.unitPrice)
      ).toFixed(2)}\n`;
    });
    return str;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPhoneError("");

    if (!isValidPhone(formData.phone)) {
      setPhoneError("Invalid phone number");
      setFormData({ ...formData, phone: "" });
      return;
    }
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      items: formatCartItems(cartItems),
      totalPrice: totalCartPrice.toFixed(2),
    };

    emailjs
      .send(
        "service_peq8stj",
        "template_sxz40xk",
        emailParams,
        "IneW6DcO23Ir_cqhc"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        navigate("/order/review");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setPhoneError("Failed to send email. Please try again later.");
      });

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

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "../slices/CartSlice";
import "./CartOverview.css";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="cart-overview">
      <p className="cart-overview-content">
        <span className="cart-overview-quantity">
          {totalCartQuantity} items
        </span>
        <span className="cart-overview-price">$ {totalCartPrice}</span>
      </p>
      <Link to="/order" className="cart-overview-link">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;

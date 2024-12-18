import { Link } from "react-router-dom";
import "./Button.css";

function Button({ children, disabled, to, onClick, type, className }) {
  const buttonClasses =
    `button ${type === "small" ? "small" : ""} ${
      type === "delete" ? "delete" : ""
    } ${type === "normal" ? "normal" : ""}` +
    (disabled ? " disabled" : "") +
    (className ? ` ${className}` : "");

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        <span>{children}</span>
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={buttonClasses}>
        <span>{children}</span>
      </button>
    );
  }

  return (
    <button disabled={disabled} className={buttonClasses}>
      <span>{children}</span>
    </button>
  );
}

export default Button;

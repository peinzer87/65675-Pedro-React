import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <AiOutlineShoppingCart className="cart" />
      </Link>
    </div>
  );
};

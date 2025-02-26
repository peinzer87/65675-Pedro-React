import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { getTotalItem } = useContext(CartContext);
  let total = getTotalItem();
  return (
    <div className="cartContainer">
      <Link to="/cart">
        <AiOutlineShoppingCart className="cart" />
        {total > 0 && <h2 className="cartBadge">{total}</h2>}
      </Link>
    </div>
  );
};

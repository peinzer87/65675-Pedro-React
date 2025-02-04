import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div>
      <h1>Aca el carrito</h1>
      <Link to="/checkout">Realizar Comprar</Link>
    </div>
  );
};

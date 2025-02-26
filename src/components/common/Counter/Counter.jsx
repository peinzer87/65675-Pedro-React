import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./counter.css";
export const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);
  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let objetoCarrito = { ...item, quantity: contador };
    addToCart(objetoCarrito);
  };

  return (
    <div className="contador-container">
      <div className="contador-controls">
        <button
          className="contador-btn"
          onClick={restar}
          aria-label="Disminuir cantidad"
        >
          -
        </button>
        <span className="contador-valor">{contador}</span>
        <button
          className="contador-btn"
          onClick={sumar}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
      <button className="agregar-carrito" onClick={onAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
};

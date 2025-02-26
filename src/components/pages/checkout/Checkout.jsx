// import { Button } from "@mui/material";
import { useContext, useState } from "react";
// import { Link } from "react-router";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import "./checkout.css";

export const Checkout = () => {
  const [ticket, setTicket] = useState(null);
  const { cart, getTotalPrice, vaciarCarrito } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
  });

  const comprar = (eventoComprar) => {
    eventoComprar.preventDefault();

    let total = getTotalPrice();

    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };

    let orderCollection = collection(db, "orders");
    const newOrder = addDoc(orderCollection, order);
    newOrder.then((res) => {
      setTicket(res.id);
      vaciarCarrito();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((item) => {
      let refDoc = doc(productsCollection, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarDatos = (eventoDatos) => {
    const { value, name } = eventoDatos.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="main-content">
      {ticket ? (
        <div className="compra-realizada">
          <h1>✅ Tu compra ha sido realizada!🎉</h1>
          <h2>El número de comprobante es: {ticket} </h2>
        </div>
      ) : (
        <div className="form-container">
          <h2>🛒 Completa tu compra</h2>
          <form onSubmit={comprar}>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={capturarDatos}
              required
            />
            <input
              type="number"
              placeholder="Teléfono"
              name="telefono"
              onChange={capturarDatos}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={capturarDatos}
              required
            />
            <input
              type="text"
              placeholder="Dirección"
              name="direccion"
              onChange={capturarDatos}
              required
            />
            <button type="submit">Comprar</button>
          </form>
        </div>
      )}
    </div>
  );
};

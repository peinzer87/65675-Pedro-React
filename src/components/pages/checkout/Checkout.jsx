import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
  });

  const comprar = (eventoComprar) => {
    eventoComprar.preventDefault();
  };
  const capturarDatos = (eventoDatos) => {
    const { value, name } = eventoDatos.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={comprar}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={capturarDatos}
        />
        <input
          type="number"
          placeholder="telefono"
          name="telefono"
          onChange={capturarDatos}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="direccion"
          name="direccion"
          onChange={capturarDatos}
        />
        <Button type="submit">comprar</Button>
      </form>
    </div>
  );
};

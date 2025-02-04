import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";

export const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productSelected = products.find((product) => product.id === id);
    setItem(productSelected);
  }, [id]);

  return (
    <div>
      <h2>{item.title} </h2>
      <h3>Precio: ${item.price} </h3>
      <h4>Descripcion: {item.description} </h4>
    </div>
  );
};

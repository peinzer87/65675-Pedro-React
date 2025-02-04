import { useParams } from "react-router-dom";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect, useState } from "react";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productFilter = products.filter(
      (elemento) => elemento.category === name
    );
    const getProducts = new Promise((resolve, reject) => {
      const logged = true;
      if (logged) {
        resolve(name ? productFilter : products);
      } else {
        reject("Error 400");
      }
    });
    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [name]);

  return (
    <div className="itemList">
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            imageUrl={elemento.imageUrl}
            title={elemento.title}
            price={elemento.price}
            description={elemento.description}
            id={elemento.id}
          />
        );
      })}
    </div>
  );
};

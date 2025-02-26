import { useParams } from "react-router";
// import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect, useState } from "react";
import "./itemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Banner } from "../../common/banner/Banner";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productCollection = collection(db, "products");
    let consulta = productCollection;
    if (name) {
      let porcionColeccion = query(
        productCollection,
        where("category", "==", name)
      );
      consulta = porcionColeccion;
    }
    const getProducts = getDocs(consulta);

    getProducts.then((res) => {
      const array = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(array);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <div className="loading">
        <h1>Cargando...⏳ </h1>
      </div>
    );
  }

  return (
    <>
      <Banner />
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
    </>
  );
};

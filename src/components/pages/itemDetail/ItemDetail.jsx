import { useEffect, useState } from "react";
// import { products } from "../../../products";
import { useParams } from "react-router";
import { Counter } from "../../common/Counter/Counter";
import "./itemDetail.css";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    });

    // let productSelected = products.find((product) => product.id === id);
    // setItem(productSelected);
  }, [id]);

  return (
    <div className="productDetail">
      <img src={item.imageUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <h3>Precio unidad: ${item.price}</h3>
      <h4>Descripción: {item.description}</h4>
      <div className="counterContainer">
        <Counter item={item} />
      </div>
    </div>
  );
};

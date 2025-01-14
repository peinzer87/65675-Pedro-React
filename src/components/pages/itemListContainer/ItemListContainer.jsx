import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemListContainer = (props) => {
  return (
    <div>
      <h1>{props.saludo}</h1>

      <ProductCard
        titulo="titulo 1"
        precio="precio 1"
        descripcion="descripcion 1"
      />
      <ProductCard
        titulo="titulo 2"
        precio="precio 2"
        descripcion="descripcion 2"
      />
      <ProductCard
        titulo="titulo 3"
        precio="precio 3"
        descripcion="descripcion 3"
      />
    </div>
  );
};

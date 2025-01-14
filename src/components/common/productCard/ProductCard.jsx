export const ProductCard = (props) => {
  return (
    <div>
      <h2>{props.titulo} </h2>
      <h3>{props.precio}</h3>
      <h4>{props.descripcion}</h4>
    </div>
  );
};

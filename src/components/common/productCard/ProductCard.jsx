import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ imageUrl, title, price, description, id }) => {
  return (
    <div className="productCard">
      <img className="imgProduct" src={imageUrl} alt="" />
      <h2>{title} </h2>
      <h2>${price}</h2>
      <h4>{description}</h4>
      <Link to={`/detail/${id}`}>
        <Button className="productButton" variant="contained">
          Ver detalle
        </Button>
      </Link>
    </div>
  );
};

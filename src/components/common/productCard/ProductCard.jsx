// import { Button } from "@mui/material";
import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ imageUrl, title, price, description, id }) => {
  return (
    <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
      <div className="productCard">
        <img className="imgProduct" src={imageUrl} alt={title} />
        <div className="textContainer">
          <h2>{title}</h2>
          ⭐⭐⭐⭐⭐
          <h3>${price}</h3>
          <h4>{description}</h4>
          {/* <Button className="productButton" variant="contained">
          Ver detalle
        </Button> */}
        </div>
      </div>
    </Link>
  );
};

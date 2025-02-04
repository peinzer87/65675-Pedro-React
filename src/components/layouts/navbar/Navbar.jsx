import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/ddgokgr8f/image/upload/v1736949872/diseno-logotipo-comida-perros_705304-48_uujlx4.avif"
          alt=""
        />
      </Link>
      <h2 className="Nombre">Shopping de Mascotas</h2>
      <ul className="navLinks">
        <Link to="/">Productos</Link>
        <Link to="/category/Comida">Comida</Link>
        <Link to="/category/Juguetes">Juguetes</Link>
        <Link to="/category/Otros">Otros</Link>
      </ul>
      <CartWidget className="cart" />
    </nav>
  );
};

import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <img src="" alt="" />
      <h2>Productos para mascotas</h2>
      <ul>
        <li>Comida</li>
        <li>Juegos</li>
        <li>Otros</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

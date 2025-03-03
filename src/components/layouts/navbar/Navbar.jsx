import { Link } from "react-router";
import { CartWidgetUno } from "../../common/cartWidget/CartWidgetUno";
import "./navbar.css";

export const Navbar = () => {
  // const agregarPorductos = () => {
  //   let productCollection = collection(db, "products");
  //   products.forEach((element) => {
  //     addDoc(productCollection, element);
  //   });
  // };
  return (
    <nav className="navbarContainer">
      {/* <button onClick={agregarPorductos}>agregar productos</button> */}
      <div className="logoNombre">
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/ddgokgr8f/image/upload/v1739544608/veterinary-logo-cat-and-dog-logo-design-pet-care-vet-clinic-logo-pet-clinic-vector_ocj2lv.jpg"
            alt=""
          />
        </Link>
        <h2 className="Nombre">Pet Mall</h2>
      </div>
      <ul className="navLinks">
        <Link to="/">Productos</Link>
        <Link to="/category/Comida">Comida</Link>
        <Link to="/category/Juguetes">Juguetes</Link>
        <Link to="/category/Otros">Otros</Link>
      </ul>
      <CartWidgetUno className="cart" />
    </nav>
  );
};

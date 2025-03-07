import "./footer.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* Sección Izquierda */}
        <div className="footerSection">
          <h3>Sobre Nosotros</h3>
          <p>Vendemos los mejores productos para tu mascota.</p>
        </div>

        {/* Sección Central */}
        <div className="footerSection">
          <h3>Contacto</h3>
          <p>Email: contacto@petmall.com</p>
          <p>Teléfono: +347 123 456 789</p>
        </div>

        {/* Sección Derecha */}
        <div className="footerSection">
          <h3>Síguenos</h3>
          <div className="socialIcons">
            <a href="#" className="icon">
              <FaFacebook />
            </a>
            <a href="#" className="icon">
              <FaTiktok />
            </a>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footerBottom">
        <p>&copy; 2025 Pet Mall - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

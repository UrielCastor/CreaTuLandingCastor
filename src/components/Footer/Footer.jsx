import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WhatsAppLink } from "../../components/SwetAlert/Swetwats.jsx";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3>ElectrOulet</h3>
          <p>Calidad y confianza en tecnología</p>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>

          <p>
            <WhatsAppLink/>
          </p>
        </div>

        <div className="footer-social">
          <h4>Seguinos</h4>
          <div className="icons">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MiTienda — Todos los derechos reservados
      </div>
    </footer>
  );
};
export {Footer};
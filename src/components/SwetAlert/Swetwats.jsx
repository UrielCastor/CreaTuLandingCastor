import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";

const WhatsAppLink = () => {

  const handleClick = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "info",
      title: "Página de prueba",
      text: "Este botón de WhatsApp es solo una demo",
      confirmButtonText: "Entendido",
      confirmButtonColor: "#25D366",
    });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "#25D366",
        fontSize: "18px",
        cursor: "pointer"
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      WhatsApp
    </a>
  );
};
export {WhatsAppLink};

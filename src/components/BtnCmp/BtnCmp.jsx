import "./BtnCmp.css";
const ComprarButton = ({ onClick, disabled = false }) => {
  return (
    <button
      className="btn btn-comprar"
      onClick={onClick}
      disabled={disabled}
    >
      Comprar 🛒
    </button>
  );
}
export { ComprarButton };
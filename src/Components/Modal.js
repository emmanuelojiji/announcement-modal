import "./Modal.scss";
import Realistic from "./Realistic";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header"></div>

        <div className="modal-content">
          <h3>Nudges is here</h3>
          <Realistic />
        </div>
      </div>
    </div>
  );
};

export default Modal;

import "./Modal.scss";
import Realistic from "./Realistic";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h3>Nudges is here</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sem
          sapien. Donec finibus metus tellus, sit amet eleifend sapien mollis
          eu.
        </p>
        <Realistic />
      </div>
    </div>
  );
};

export default Modal;

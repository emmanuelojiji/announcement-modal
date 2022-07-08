import "./Modal.scss";
import Realistic from "./Realistic";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
          <div className="modal-header"></div>
        <div className="modal-content">
          <h3>Schedule nudges on your resources</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            sem sapien. Donec finibus metus tellus.
          </p>
        </div>
        <Realistic />
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default Modal;

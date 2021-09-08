import React from 'react';
import './Confirm.css';

const Confirm = ({ text, funcion, setShowModal }) => {
  const handleConfirm = (e) => {
    if (e.target.textContent === 'Si') {
      funcion(true);
    } else {
      funcion(false);
    }
    setShowModal(false);
  };

  return (
    <div className="card confirm">
      <p>{text}</p>
      <div className="confirm-btns" onClick={handleConfirm}>
        <span>Si</span>
        <span>No</span>
      </div>
    </div>
  );
};

export default Confirm;

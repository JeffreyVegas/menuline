import React, { useState, useEffect } from 'react';
import './DynamicModal.css';

const DynamicModal = (props) => {
  const { show, setShow, refElement, children } = props;
  const [styleForm, setStyleForm] = useState({});
  const [styleModal, setStyleModal] = useState({});

  const closeModal = (e) => {
    if (e.target.id === 'theZone') {
      setShow(false);
    }
  };

  useEffect(() => {
    if (refElement) {
      getPosition();
    } else {
      position();
    }
  }, [show]);

  const getPosition = () => {
    const position = refElement.current.getBoundingClientRect();
    setStyleForm({
      width: position.width + 'px',
      position: 'fixed',
      left: position.left + 'px',
      top: position.top + 'px',
    });
  };
  const position = () => {
    setStyleModal({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    });
    setStyleForm({
      width: '',
    });
  };

  return (
    <>
      {show ? (
        <div
          className="modal-dynamic"
          onClick={closeModal}
          id="theZone"
          style={styleModal}
        >
          <div style={styleForm}>{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default DynamicModal;
/* 
 <div
          className="modal-dynamic"
          onClick={closeModal}
          id="theZone"
          style={styleModal}
        >
          <div style={styleForm}>{children}</div>
        </div>
*/

import React from "react";
import "../styles/Modal.css";

const LegalModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕ Cerrar
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default LegalModal;

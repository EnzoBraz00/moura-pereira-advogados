import React from "react";
import "./ModalComponent.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
}
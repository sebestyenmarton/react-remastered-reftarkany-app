import React from "react";

import "./confirmation-modal.scss";
import Button from "@mui/joy/Button";

interface ConfirmationModalProps {
  title: string;
  descriptionText?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  descriptionText,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <div className="confirm-title">{title}</div>
        {descriptionText && (
          <div className="confirm-description-text">{descriptionText}</div>
        )}
        <div className="button-container">
          <Button onClick={onCancel} color="neutral" size="sm">
            {cancelText ? cancelText : "nem"}
          </Button>
          <Button onClick={onConfirm} color="danger" size="sm">
            {confirmText ? confirmText : "igen"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

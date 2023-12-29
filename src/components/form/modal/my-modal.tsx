import React, { ReactNode } from "react";

import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import { RxExitFullScreen } from "react-icons/rx";

import "./my-modal.scss";

interface IModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MyModal: React.FC<IModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="edit-modal">
        <div className="modal-close-button">
          <Button
            onClick={onClose}
            variant="plain"
            size="sm"
            startDecorator={<RxExitFullScreen />}
          >
            Kilépés
          </Button>
        </div>
        <h2>{title}</h2>
        {children}
      </div>
    </Modal>
  );
};

export default MyModal;

import React, { useState, useEffect } from "react";

import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import RecordingForm from "../recording-form/recording-form";
import { IRecording } from "../../../../typings/global";
import LoadingPage from "../../../loading/loading-page";
import { RxExitFullScreen } from "react-icons/rx";

import "./edit-recording-modal.scss";

interface EditRecordingModalProps {
  recording: IRecording;
  open: boolean;
  onClose: () => void;
  onSave: (formData: any) => Promise<void>;
}

const EditRecordingModal: React.FC<EditRecordingModalProps> = ({
  recording,
  open,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    setFormData({
      tipus: recording.tipus,
      cim: recording.cim,
      link: recording.link,
      szolgal: recording.szolgal,
      datum: recording.datum,
      kategoria: recording.kategoria,
    });
  }, [recording]);

  const handleFormSubmit = async (formData: any) => {
    onSave(formData);
    onClose();
  };

  if (!formData) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose}>
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
        <h2>Felvétel Szerkesztése</h2>
        {formData ? (
          <RecordingForm
            onSubmit={handleFormSubmit}
            initialValues={formData}
            isOnEditMode={true}
          />
        ) : (
          <LoadingPage label="Szerkesztés betöltése..." />
        )}
      </div>
    </Modal>
  );
};

export default EditRecordingModal;

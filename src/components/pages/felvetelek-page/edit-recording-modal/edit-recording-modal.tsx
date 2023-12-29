import React, { useState, useEffect } from "react";

import RecordingForm from "../recording-form/recording-form";
import { IRecording } from "../../../../typings/global";
import LoadingPage from "../../../loading/loading-page";
import MyModal from "../../../form/modal/my-modal";

interface IEditRecordingModalProps {
  recording: IRecording;
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: any) => Promise<void>;
}

const EditRecordingModal: React.FC<IEditRecordingModalProps> = ({
  recording,
  isOpen,
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
    <MyModal title="Felvétel Szerkesztése" isOpen={isOpen} onClose={onClose}>
      {formData ? (
        <RecordingForm
          onSubmit={handleFormSubmit}
          initialValues={formData}
          isOnEditMode={true}
        />
      ) : (
        <LoadingPage label="Szerkesztés betöltése..." />
      )}
    </MyModal>
  );
};

export default EditRecordingModal;

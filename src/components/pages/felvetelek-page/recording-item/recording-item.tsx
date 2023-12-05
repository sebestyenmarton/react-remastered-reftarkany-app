import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import "./recording-item.scss";
import { IRecording } from "../../../../typings/global";

interface RecordingItemProps {
  recording: IRecording;
  onEdit?: (recording: IRecording) => void;
  onDelete?: (recordingId: number) => void;
}

const RecordingItem: React.FC<RecordingItemProps> = ({
  recording,
  onEdit,
  onDelete,
}) => {
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  const handleEditClick = () => {
    onEdit && onEdit(recording);
  };

  const handleDeleteClick = () => {
    onDelete && onDelete(recording.id);
  };

  useEffect(() => {
    const iframe = document.getElementById(
      `iframe-${recording.id}`
    ) as HTMLIFrameElement;

    if (iframe) {
      iframe.addEventListener("load", handleVideoLoad);

      return () => {
        iframe.removeEventListener("load", handleVideoLoad);
      };
    }
  }, [recording.id]);

  return (
    <div className="video-item" key={recording.id}>
      <div className={`skeleton-overlay ${loading ? "visible" : "hidden"}`}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={280}
          height={157.5}
        />
      </div>
      <iframe
        id={`iframe-${recording.id}`}
        className={`video-iframe ${loading ? "hidden" : "visible"}`}
        width="280"
        height="157.5"
        frameBorder="0"
        src={recording.link}
        title={recording.cim}
        allowFullScreen
      />
      <div className="video-details">
        <h3>{recording.cim}</h3>
        <p>{recording.datum}</p>
        <p>{recording.szolgal}</p>
        <div className="button-container">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RecordingItem;

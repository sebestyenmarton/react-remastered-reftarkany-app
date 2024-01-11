import React, { useState, useEffect } from "react";

import Skeleton from "@mui/material/Skeleton";
import { IRecording } from "../../../../typings/global";

import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import "./recording-item.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types/redux";
import useCategoryParams from "../../../form/category-filter/use-category-params/use-category-params";

interface IRecordingItemProps {
  recording: IRecording;
  onEdit?: (recording: IRecording) => void;
  onDelete?: (recording: IRecording) => void;
}

const RecordingItem: React.FC<IRecordingItemProps> = ({
  recording,
  onEdit,
  onDelete,
}) => {
  const [loading, setLoading] = useState(false);
  const { handleCategorySelect } = useCategoryParams();

  const handleVideoLoad = () => {
    setLoading(false);
  };

  const handleEditClick = () => {
    onEdit && onEdit(recording);
  };

  const handleDeleteClick = () => {
    onDelete && onDelete(recording);
  };

  useEffect(() => {
    const iframe = document.getElementById(
      `iframe-${recording.id}`
    ) as HTMLIFrameElement;

    const handleIframeLoad = () => {
      handleVideoLoad();
    };

    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);

      return () => {
        iframe.removeEventListener("load", handleIframeLoad);
      };
    }
  }, [recording.id, handleVideoLoad]);

  const isLoggedUser = useSelector((state: RootState) => state.user.user)
    ? true
    : false;

  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const regexMatch = recording.link?.match(regex);
  const youtubeVideoId = regexMatch ? regexMatch[1] : null;

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
      {!loading && (
        <div className="video-iframe">
          <iframe
            title={recording.cim}
            width="280"
            height="157.5"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            frameBorder="0"
            onLoad={handleVideoLoad}
            allowFullScreen
          />
        </div>
      )}
      <div className="video-details">
        <div className="video-title">{recording.cim}</div>
        <div className="video-description">
          <div className="video-speaker">Szolgál: {recording.szolgal}</div>
          <div className="recording-date-with-category">
            <div
              className="recording-date tag-box"
              onClick={() => handleCategorySelect("Összes", "")}
            >
              {recording.datum}
            </div>
            <div
              className="recording-category tag-box"
              onClick={() =>
                handleCategorySelect(recording.tipus, recording.kategoria)
              }
            >
              {recording.kategoria}
            </div>
          </div>
        </div>
        {isLoggedUser && (
          <div className="button-container">
            <div className="handle-click-icon">
              <FaRegEdit onClick={handleEditClick} />
            </div>
            <div className="handle-click-icon">
              <MdOutlineDeleteForever onClick={handleDeleteClick} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordingItem;

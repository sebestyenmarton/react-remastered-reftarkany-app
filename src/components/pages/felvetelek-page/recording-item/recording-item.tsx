import React from "react";

import "./recording-item.scss";
import { IRecording } from "../../../../typings/global";

interface RecordingItemProps {
  recording: IRecording;
}

const RecordingItem = ({ recording }: RecordingItemProps) => {
  return (
    <div className="video-item" key={recording.id}>
      <iframe
        width="280"
        height="157.5"
        frameBorder="0"
        src={recording.link}
        title={recording.cim}
      />
      <div className="video-details">
        <h3>{recording.cim}</h3>
        <p>{recording.datum}</p>
        <p>{recording.szolgal}</p>
      </div>
    </div>
  );
};

export default RecordingItem;

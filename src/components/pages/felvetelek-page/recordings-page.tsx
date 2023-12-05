import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import getBaseUrl from "../../../service/ApplicationHttpClient";

import Navbar from "../../navbar/navbar";
import Pagination from "../../pagination/pagination";
import RecordingItem from "./recording-item/recording-item";
import { IRecording } from "../../../typings/global";
import RecordingForm from "./recording-form/recording-form";

import "./recordings-page.scss";
import LoadingPage from "../../loading/loading-page";
import EditRecordingModal from "./edit-recording-modal/edit-recording-modal";

const RecordingsPage = () => {
  const { page, pageSize } = useParams<{ page: string; pageSize: string }>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [recordings, setRecordings] = useState<IRecording[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRecording, setSelectedRecording] = useState<IRecording | null>(
    null
  );
  const [showEditModal, setShowEditModal] = useState(false);

  axios.defaults.baseURL = getBaseUrl();

  const fetchRecordings = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/recordings", {
        params: {
          page,
          pageSize,
        },
      });
      setRecordings(response.data.records || []);
      const totalItems = response.data.totalRecords || 0;
      const calculatedTotalPages = Math.ceil(totalItems / Number(pageSize));
      setTotalPages(calculatedTotalPages || 1);
    } catch (error) {
      console.error("Error fetching recordings", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecordings();
  }, [page, pageSize]);

  const handleEditRecording = (recording: IRecording) => {
    setSelectedRecording(recording);
    setShowEditModal(true);
  };

  const handleSaveEditedRecording = async (formData: any) => {
    try {
      setLoading(true);
      await axios.put(`/recordings/${selectedRecording?.id}`, formData);

      console.log(
        "Edited Successfully",
        `/recordings/${selectedRecording?.id} `,
        formData
      );
      fetchRecordings(); // Refetch recordings after editing
    } catch (error) {
      console.error("Error saving edited recording", error);
    } finally {
      setLoading(false);
      setShowEditModal(false); // Close the edit modal
    }
  };

  const handleDeleteRecording = async (recordingId: number) => {
    try {
      setLoading(true);
      // Make an Axios request to delete the recording
      await axios.delete(`/recordings/${recordingId}`);
      console.log("Deleted Successfully", `/recordings/${recordingId}`);
      // Optionally, update the UI by removing the deleted recording from the local state
      setRecordings((prevRecordings) =>
        prevRecordings.filter((recording) => recording.id !== recordingId)
      );
    } catch (error) {
      console.error("Error deleting recording", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      setLoading(true);
      await axios.post("/recordings", formData);
      fetchRecordings();
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  function PaginationComponent() {
    return (
      <Pagination
        currentPage={Number(page)}
        totalPages={totalPages}
        pageSize={Number(pageSize)}
      />
    );
  }

  return (
    <div className="recordings-page" id="Recordings">
      <Navbar
        selectedValue={`felvetelek/${page?.toString()}/${pageSize?.toString()}`}
        configuration={routingConfiguration}
      />

      <div className="recordings-content">
        <RecordingForm onSubmit={handleFormSubmit} />
        {loading ? (
          <LoadingPage label="Felvételek betöltése..." />
        ) : (
          <div className="playlist">
            <PaginationComponent />
            {recordings.length > 0 &&
              recordings.map((recording) => {
                return (
                  <RecordingItem
                    onEdit={() => handleEditRecording(recording)}
                    onDelete={() => handleDeleteRecording(recording.id)}
                    recording={recording}
                    key={recording.id}
                  />
                );
              })}
            <PaginationComponent />
          </div>
        )}
        {selectedRecording && (
          <EditRecordingModal
            recording={selectedRecording}
            open={showEditModal}
            onClose={() => {
              setSelectedRecording(null);
              setShowEditModal(false);
            }}
            onSave={handleSaveEditedRecording}
          />
        )}
      </div>
    </div>
  );
};

export default RecordingsPage;

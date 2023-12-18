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
import LoadingPage from "../../loading/loading-page";
import EditRecordingModal from "./edit-recording-modal/edit-recording-modal";
import "./recordings-page.scss";
import ConfirmationModal from "../../form/confirmation-modal/confirmation-modal";

const RecordingsPage = () => {
  const { page, pageSize } = useParams<{ page: string; pageSize: string }>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [recordings, setRecordings] = useState<IRecording[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRecording, setSelectedRecording] = useState<IRecording | null>(
    null
  );
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingRecording, setDeletingRecording] = useState<IRecording | null>(
    null
  );

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
      fetchRecordings();
    } catch (error) {
      console.error("Error saving edited recording", error);
    } finally {
      setLoading(false);
      setShowEditModal(false);
    }
  };

  const handleDeleteRecording = (recording: IRecording) => {
    setDeletingRecording(recording);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setDeletingRecording(null);
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);

      await axios.delete(`/recordings/${deletingRecording?.id}`, {
        withCredentials: true,
      });

      console.log(
        "Deleted Successfully",
        `/recordings/${deletingRecording?.id}`
      );

      setRecordings((prevRecordings) =>
        prevRecordings.filter(
          (recording) => recording.id !== deletingRecording?.id
        )
      );
    } catch (error) {
      console.error("Error deleting recording", error);
    } finally {
      setLoading(false);
      setDeletingRecording(null);
      setShowDeleteModal(false);
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
                    onDelete={() => handleDeleteRecording(recording)}
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
        {showDeleteModal && (
          <ConfirmationModal
            title={`Biztos törölni szeretnéd?`}
            descriptionText={`${deletingRecording?.cim} címü felvétel törlése után már nem lesz visszaállítható. Teljesen elveszíted ezt a felvételt a weboldalról!`}
            cancelText="meghagyás"
            confirmText="törlés"
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
    </div>
  );
};

export default RecordingsPage;

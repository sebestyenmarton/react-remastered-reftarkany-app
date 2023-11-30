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

const RecordingsPage = () => {
  const { page, pageSize } = useParams<{ page: string; pageSize: string }>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [recordings, setRecordings] = useState<IRecording[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
                  <RecordingItem recording={recording} key={recording.id} />
                );
              })}
            <PaginationComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordingsPage;

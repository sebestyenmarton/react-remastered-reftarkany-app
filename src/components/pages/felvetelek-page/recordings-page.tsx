import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";

import Pagination from "../../pagination/pagination";
import RecordingItem from "./recording-item/recording-item";
import { IRecording } from "../../../typings/global";
import RecordingForm from "./recording-form/recording-form";

import "./recordings-page.scss";

const RecordingsPage = () => {
  const { page, pageSize } = useParams<{ page: string; pageSize: string }>();
  const [totalPages, setTotalPages] = useState<number>(1); // Initialize with 1 page
  const [recordings, setRecordings] = useState<IRecording[]>([]);

  //TODO: Must be resolved the redirecting with a global baseURL
  /**
   *    Remote host url:
   * http://beta.reftarkany.hu/refapi/recordings
   *
   * Local host url:
   * http://localhost/refapi/recordings/
   **/
  const fetchRecordings = async () => {
    try {
      const response = await axios.get(`http://localhost/refapi/recordings`, {
        params: {
          page,
          pageSize,
        },
      });
      setRecordings(response.data.records || []); // Assuming the records are now nested under a 'records' key
      const totalItems = response.data.totalRecords || 0; // Assuming the total count is now in a 'totalRecords' key
      const calculatedTotalPages = Math.ceil(totalItems / Number(pageSize));
      setTotalPages(calculatedTotalPages || 1); // Calculate total pages
    } catch (error) {
      console.error("Error fetching recordings", error);
    }
  };

  useEffect(() => {
    fetchRecordings();
  }, [page, pageSize]);

  const handleFormSubmit = async (formData: any) => {
    try {
      // Perform a POST request to your backend to add a new recording
      const response = await axios.post(
        "http://localhost/refapi/recordings",
        formData
      );
      console.log(response); // Log the response if needed
      // You may want to refetch the recordings after adding a new one
      fetchRecordings();
    } catch (error) {
      console.error("Error submitting form", error);
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
        <div className="playlist">
          <PaginationComponent />
          {recordings.length > 0 &&
            recordings.map((recording) => {
              return <RecordingItem recording={recording} key={recording.id} />;
            })}
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default RecordingsPage;

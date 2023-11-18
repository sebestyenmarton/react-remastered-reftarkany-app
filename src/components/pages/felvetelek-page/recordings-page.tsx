import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";

import "./recordings-page.scss";
import Pagination from "../../pagination/pagination";

interface Recording {
  id: number;
  cim: string;
  datum: string;
  kategoria: string;
  link: string;
  szolgal: string;
  tipus: string;
}

const RecordingsPage = () => {
  const { page, pageSize } = useParams<{ page: string; pageSize: string }>();
  const [totalPages, setTotalPages] = useState<number>(1); // Initialize with 1 page
  const [recordings, setRecordings] = useState<Recording[]>([]);

  useEffect(() => {
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

    fetchRecordings();
  }, [page, pageSize]);

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
      <Navbar selectedValue="felvetelek" configuration={routingConfiguration} />
      <div className="recordings-content">
        <div className="playlist">
          <PaginationComponent />
          {recordings.length > 0 &&
            recordings.map((recording) => {
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
            })}
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default RecordingsPage;

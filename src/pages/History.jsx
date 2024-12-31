import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI';

const History = () => {
  const [allVideoDetails, setAllVideoHistory] = useState([]);

  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllVideoHistory(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeHistory = async (id) => {
    try {
      await deleteHistoryAPI(id);
      getAllHistory(); // Refresh history after deletion
      // console.log(id.timestamp);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllHistory();
  }, []);

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="d-flex justify-content-between container">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Timestamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {allVideoDetails?.length > 0 ? (
            allVideoDetails?.map((videoDetails, index) => (
              <tr key={videoDetails?.id}>
                <td>{index + 1}</td>
                <td>{videoDetails?.caption}</td>
                <td>{videoDetails?.youtubeLink}</td>
                <td>{videoDetails?.timestamp}</td>
                <td>
                  <button
                    onClick={() => removeHistory(videoDetails?.id)}
                    className="btn"
                  >
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center fw-bolder text-danger">
                You didn't watch any video yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;

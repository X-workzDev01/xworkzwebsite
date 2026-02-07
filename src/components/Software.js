import React, { useState, useEffect } from "react";
import "./Software.css";
import axios from "axios";

const Software = () => {
  const [softwareData, setSoftwareData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://raw.githubusercontent.com/x-workzdev/JSON/master/SoftwareLinks.json"
      )
      .then(res => {
        setSoftwareData(res.data.Softwares);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        console.log(err);
        setError("Failed to load software data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="software-page">
        <div className="software-loading">
          <div className="loading-spinner"></div>
          <p>Loading software resources...</p>
        </div>
      </div>
    );
  }

  if (error && softwareData.length === 0) {
    return (
      <div className="software-page">
        <div className="software-error">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="software-page">
      <div className="software-header">
        <h1>
          Software
          <span> Resources</span>
        </h1>
        <p>Download essential tools and software for your development needs</p>
      </div>
      
      <div className="software col-12">
        {softwareData && softwareData.length > 0 ? (
          softwareData.map((d, i) => (
            <div className="card" key={i}>
              <h1>{d.name}</h1>

              <a href={d.directLink} target="_blank" rel="noopener noreferrer">
                <button type="button">Download</button>
              </a>

              <a href={d.extranalLink} target="_blank" rel="noopener noreferrer">
                <button type="button">Other Versions</button>
              </a>
              <div className="accent-line" />
            </div>
          ))
        ) : (
          <div className="software-empty">
            <p>No software resources available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Software;
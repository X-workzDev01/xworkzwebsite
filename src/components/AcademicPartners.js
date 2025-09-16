import React, { useState, useEffect } from "react";
import "./AcademicPartners.css";
import axios from "axios";

const AcademicPartners = () => {
  const [academicPartners, setAcademicPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcademicPartners = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/main/AcademicPartners.json"
        );
        setAcademicPartners(response.data.AcademicPartners);
      } catch (error) {
        console.error("Failed to load academic partners from GitHub:", error);
        setError("Failed to load academic partners. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAcademicPartners();
  }, []);

  const retryFetch = () => {
    setLoading(true);
    setError(null);
    window.location.reload();
  };

  if (loading) {
    return (
      <section className="academic-partners-section" id="academic-partners">
        <div className="container">
          <div className="heading text-center">
            <h2>Our <span>Academic Partners</span></h2>
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading academic partners...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="academic-partners-section" id="academic-partners">
        <div className="container">
          <div className="heading text-center">
            <h2>Our <span>Academic Partners</span></h2>
            <div className="error-message">
              <p>{error}</p>
              <button onClick={retryFetch} className="retry-btn">
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="academic-partners-section" id="academic-partners">
      <div className="container">
        <div className="heading text-center">
          <h2>
            Our <span>Academic Partners</span>
          </h2>
          <p>
            We collaborate with prestigious educational institutions to provide quality training programs
          </p>
        </div>

        <div className="academic-partners-container">
          <div className="marquee-fullwidth">
            <div className="marquee-content-fullwidth">
              {academicPartners.concat(academicPartners).map((partner, index) => (
                <div className="partner-item" key={`${partner.id}-${index}`}>
                  <div className="partner-link">
                    <img
                      src={partner.logo}
                      alt={`Academic Partner ${partner.id}`}
                      className="partner-logo"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/80x80/ffffff/666666?text=Logo";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="academic-partners-footer text-center">
          <p>
            We are proud to partner with these esteemed institutions to shape the future of education
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcademicPartners;
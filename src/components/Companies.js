import React, { useState, useEffect } from "react";
import "./Companies.css";
import axios from "axios";

const Companies = () => {
  const [companyLogos, setCompanyLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        // Fetch company data from GitHub
        const response = await axios.get(
          "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Companies.json"
        );
        setCompanyLogos(response.data.Companies);
      } catch (error) {
        console.log("Failed to load companies from GitHub:", error);
        setError("Failed to load companies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <section className="companies-section" id="recruitment-partners">
        <div className="container">
          <div className="heading text-center">
            <h2>Our <span>Recruitment Partners</span></h2>
            <div className="loading-spinner">Loading companies...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="companies-section" id="recruitment-partners">
        <div className="container">
          <div className="heading text-center">
            <h2>Our <span>Recruitment Partners</span></h2>
            <div className="error-message">
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="retry-btn">
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="companies-section" id="recruitment-partners">
      <div className="container">
        <div className="heading text-center">
          <h2>
            Our <span>Recruitment Partners</span>
          </h2>
          <p>
            We are proud to be associated with top companies that recruit our trained professionals
          </p>
        </div>

        <div className="companies-container">
          <div className="marquee">
            <div className="marquee-content">
              {companyLogos.concat(companyLogos).map((company, index) => (
                <div className="company-item" key={`${company.id}-${index}`}>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="company-logo"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback for broken images
                        e.target.src = "https://via.placeholder.com/80x80?text=Company";
                      }}
                    />
                    <span className="company-name">{company.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="companies-footer text-center">
          <p>
            Our students have been placed in these leading organizations and many more...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
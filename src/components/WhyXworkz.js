import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./WhyXworkz.css";

const WhyXworkz = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GitHub raw content URL for WhyXworkz data
  const GITHUB_WHYXWORKZ_URL = "https://raw.githubusercontent.com/x-workzdev/xworkz-courses/main/WhyXworkz.json";

  useEffect(() => {
    setLoading(true);
    
    // Fetch the WhyXworkz data from GitHub
    fetch(GITHUB_WHYXWORKZ_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setFeatures(data.features);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading data:", error);
        setError("Failed to load content. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="why-xworkz" id="why-xworkz">
      <div className="container">
        <div className="heading text-center">
          <h2>
            Why
            <span> Xworkz</span>
          </h2>
          <p>
            Discover what makes our training program exceptional and why we're the right choice for your career growth
          </p>
        </div>
        
        {loading && (
          <div className="loading-message">
            <p>Loading content...</p>
          </div>
        )}
        
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && features.length > 0 && (
          <Carousel 
            interval={3000} 
            pause={false} 
            indicators={true} 
            controls={true}
            className="why-xworkz-carousel"
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon-custom">&gt;</span>}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon-custom">&lt;</span>}
          >
            {features.map((feature) => (
              <Carousel.Item key={feature.id}>
                <div className="carousel-content">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                      <img
                        className="d-block w-100 carousel-image"
                        src={feature.image}
                        alt={feature.title}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400/ffffff/007bff?text=Image+Not+Found";
                        }}
                      />
                    </div>
                    <div className="col-12 col-lg-6 carousel-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {!loading && !error && features.length === 0 && (
          <div className="no-data-message">
            <p>No content available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyXworkz;
import React from "react";
import "./RecognizedBy.css";
// Import your images
import xworkzCertificate from "../img/xworkz-certificate.png"; 
import msmeLogo from "../img/msme-logo.png";
import internshipCertificate from "../img/Internship.jpg"; // Add this import

const RecognizedBy = () => {
  return (
    <section className="recognized-by" id="certification">
      <div className="container">
        <div className="heading text-center">
          <h2>
            Recognized <span>By</span>
          </h2>
          <p>Our accreditations and certifications</p>
        </div>
        
        <div className="row justify-content-center align-items-stretch">
          {/* Xworkz Certificate Section */}
          <div className="col-12 col-md-4 mb-4">
            <div className="certificate-card h-100">
              <div className="certificate-image">
                <img 
                  src={xworkzCertificate} 
                  alt="Xworkz Official Certificate" 
                  className="img-fluid"
                />
              </div>
              <div className="certificate-content text-center">
                <h4>Xworkz Certificate of Completion</h4>
                <p>Awarded to students upon successful completion of training</p>
                <div className="certificate-details">
                  <p>Recognized by industry partners</p>
                  <p>Validates Java development skills</p>
                  <p>Demonstrates practical project experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* MSME Registration Section */}
          <div className="col-12 col-md-4 mb-4">
            <div className="msme-card h-100">
              <div className="msme-logo text-center">
                <img 
                  src={msmeLogo} 
                  alt="MSME Logo" 
                  className="img-fluid"
                />
              </div>
              <div className="msme-content text-center">
                <h4>MSME Registered</h4>
                <p>Ministry of Micro, Small & Medium Enterprises, Government of India</p>
                <div className="msme-details">
                  <p>Registration No: UDYAM-KR-03-0494064</p>
                  <p>Registered under MSME Act, 2006</p>
                </div>
                <div className="msme-description">
                  <p>
                    X-workz holds official registration with the Ministry of Micro, 
                    Small & Medium Enterprises (MSME), reflecting our commitment to 
                    regulatory compliance and industry excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

                    
          {/* Internship Certificate Section */}
          <div className="col-12 col-md-4 mb-4">
            <div className="internship-card h-100">
              <div className="certificate-image">
                <img 
                  src={internshipCertificate} 
                  alt="Internship Certificate" 
                  className="img-fluid"
                />
              </div>
              <div className="certificate-content text-center">
                <h4>Internship Certificate</h4>
                <p>Real-world industry experience recognition</p>
                <div className="certificate-details">
                  <p>Hands-on project development</p>
                  <p>Industry mentorship</p>
                  <p>Professional work experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;
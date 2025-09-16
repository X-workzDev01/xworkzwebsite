import React from "react";
import { Link } from "react-router-dom";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Typewriter from "typewriter-effect";
import code from "../img/coding_img.png";
import Banner from "./Banner";
import "./Home.css";
import HomeModel from "./HomeModel";
import { Tech } from "./Tech";
import WhyXworkz from "./WhyXworkz";
import Course from "./Course";
import AcademicPartners from "./AcademicPartners";
import Companies from "./Companies";
import { Gallery } from "./Gallery";

const Home = (props) => {
  return (
    <div>
      <Banner />
      {/* <HomeModel /> */}
      <section className="hero" id="home">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-6 order-lg-1 order-2">
              <h1>
                We Are
                <span>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      cursor: "_",
                      strings: [
                        "Software Trainers",
                        "Working Professionals",
                        "Experienced Trainers",
                      ],
                    }}
                  />
                </span>
              </h1>
              <div className="mt-4">
                <span className="text-secondary fs-5 fw-bold">
                  Click here for registration
                </span>
              </div>
              <Link to="/register">
                <button className="custom-btn btn-5 mt-3">Enroll Now</button>
              </Link>
            </div>
            <div className="col-12 col-lg-6 order-lg-2 order-1 text-center">
              <img className="img-fluid" src={code} alt="Coding" />
            </div>
          </div>
        </div>
      </section>
      <Tech />
      <Course />
      <Companies />
      <WhyXworkz />
      <AcademicPartners />
      
      {/* NEW ABOUT SECTION WITH MARQUEE */}
      <div>
        <section className="about-new" id="about">
          <div className="container">
            <div className="heading text-center">
              <h2>
                About
                <span>Us</span>
              </h2>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 text-center">
                <p className="about-intro lead">
                  At the heart of our mission is a simple belief: great careers are built through practical experience, mentorship, and community.
                </p>
                
                <div className="about-detail">
                  <p>
                    As IT professionals with decades of combined industry expertise, we've developed training programs that mirror actual workplace challenges while fostering innovation and collaboration. Our journey is captured in the moments we share—the intense focus during hands-on projects, the breakthrough insights during one-on-one mentorship sessions, and the triumphant celebrations of placements achieved.
                  </p>
                  <p>
                    These experiences reflect our core philosophy: that excellence in technology education comes from doing, growing, and succeeding together. Our alumni are our pride and joy, having gone on to achieve remarkable success in the tech industry and holding key positions in renowned companies worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="marquee-section">
              <h4 className="text-center mb-4">Our Journey In Moments</h4>
              <div className="gallery-container">
                <Gallery />
              </div>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppWidget
        open={false}
        companyName="Xworkz ODC"
        phoneNumber="+919886971483"
      />
    </div>
  );
};

export default Home;
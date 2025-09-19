import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import JsonData from "./data/data.json";
import SoftwareData from "./data/softwareLink.json";

import { Route, Routes } from "react-router-dom";

import Batches from "./components/Batches";
import Directions from "./components/Directions";
import Footer from "./components/Footer";
import Home from "./components/Home";
import InterviewQuestions from "./components/InterviewQuestions";
import NavBar from "./components/NavBar";
import { Register } from "./components/Register";
import Software from "./components/Software";
import Testimonials from "./components/Testimonials";
import { Feedback } from "./components/Feedback";
import { Button } from "@mui/material";
import VerifyCertificate from "./components/VerifyCertificate";
import Course from "./components/Course";
import CallBackModal from "./components/CallBackModal";

const App = () => {
  const [data, setData] = useState({});
  const [softwareData, setSoftwareData] = useState({});
  const [courseData, setCourseData] = useState({});
  const [showCallBackModal, setShowCallBackModal] = useState(false);

  useEffect(() => {
    setData(JsonData);
    setSoftwareData(SoftwareData);
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      
      {/* Request Call Back Button - Positioned below navbar */}
      <div className="callback-top-btn">
        <button 
          onClick={() => setShowCallBackModal(true)}
          className="callback-btn-top"
        >
          <i className="fas fa-phone-alt"></i>
          <span className="callback-text">Request Call Back</span>
        </button>
      </div>
      
      <div className="main-content">
        <Routes>
          <Route path="/about" element={<About value={data} />} />
          <Route path="/" element={<Home value={data} />} />
          <Route path="/softwares" element={<Software />} />
          <Route path="/batches" element={<Batches />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/reviews" element={<Testimonials />} />
          <Route path="/InterviewQuestions" element={<InterviewQuestions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/verifycertificate" element={<VerifyCertificate />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </div>
      
      {/* Call Back Modal */}
      <CallBackModal 
        show={showCallBackModal} 
        onClose={() => setShowCallBackModal(false)} 
      />
      
      <Footer />
    </div>
  );
};

export default App;
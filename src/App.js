import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import JsonData from "./data/data.json";

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
import VerifyCertificate from "./components/VerifyCertificate";
import Course from "./components/Course";
import CallBackModal from "./components/CallBackModal";
import ServerError from "./components/error/ServerError";
import { startHealthMonitor } from "./components/utils/startHealthMonitor";

const App = () => {
  const [data, setData] = useState({});
  const [showCallBackModal, setShowCallBackModal] = useState(false);

  useEffect(() => {
    setData(JsonData);
    startHealthMonitor();
  }, []);

  return (
    <div className="app-container">
      <NavBar />

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
          <Route path="/server-error" element={<ServerError />} />
          <Route
            path="/verifycertificate/:uniqueId/:certificateType"
            element={<VerifyCertificate />}
          />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </div>

      <CallBackModal
        show={showCallBackModal}
        onClose={() => setShowCallBackModal(false)}
      />

      <Footer />
    </div>
  );
};

export default App;

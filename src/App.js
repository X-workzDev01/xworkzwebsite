import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import CourseData from "./data/courses.json";
import JsonData from "./data/data.json";
import SoftwareData from "./data/softwareLink.json";

import { Route, Routes } from "react-router-dom";

import Courses from "./components/Courses";
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

const App = () => {
  const [data, setData] = useState({});
  const [softwareData, setSoftwareData] = useState({});
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    setData(JsonData);
    setSoftwareData(SoftwareData);
    setCourseData(CourseData);
  }, []);

  return (
    <div className="App">
      <NavBar />
      {/* <div>
				<Button variant="contained">Contained</Button>
			</div> */}
      <Routes>
        <Route path="/about" element={<About value={data} />} />
        <Route path="/" element={<Home value={data} />} />
        <Route path="/softwares" element={<Software />} />
        <Route path="/courses" element={<Courses value={courseData} />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/reviews" element={<Testimonials />} />
        <Route path="/InterviewQuestions" element={<InterviewQuestions />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/verifycertificate" element={<VerifyCertificate />} />
      </Routes>
      {/* <div className="d-flex justify-content-end align-content-center position-relative">
        <Button variant="contained">Feedback</Button>
      </div> */}
      <Footer />
    </div>
  );
};

export default App;

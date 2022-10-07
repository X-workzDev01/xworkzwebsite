
import './App.css';
import  React , { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import JsonData from './data/data.json';
import SoftwareData from './data/softwareLink.json';
import CourseData from './data/courses.json';

import { About } from './components/About';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './components/Home';
import Software from './components/Software';
import Courses from './components/Courses';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Directions from './components/Directions';
  
const App = () => {
  const [data, setData] = useState({});
  const [softwareData , setSoftwareData] = useState({});
  const [courseData , setCourseData] = useState({});
  useEffect(() => {
    setData(JsonData);
    setSoftwareData(SoftwareData);
    setCourseData(CourseData);
    
  }, []);

  return (
    <div className='App'>
      <div className='App-header'>
      <Router>
        <NavBar />
        
   
    <Routes>

    
    <Route path="/about" element={<About value={JsonData}/>}/>
    <Route path="/" element={<Home  value={JsonData}/>}/>
    <Route path="/softwares" element={<Software value={SoftwareData}   />}/>
    <Route path="/courses" element={<Courses  value={CourseData} />}/>
    <Route path="/directions" element={<Directions />}/>
    
    
  </Routes>

  

</Router>


        </div>
    

  <Footer />
    </div>
  );
};

export default App;


import './App.css';
import  React , { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data/data.json';
import SoftwareData from './data/softwareLink.json';
import CourseData from './data/courses.json';
import { About } from './components/About';
import TeamData from './data/team.json';

import {BrowserRouter , Routes, Route } from "react-router-dom";


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
  const [TeamData , setTeamData]= useState({});

  useEffect(() => {
    setData(JsonData);
    setSoftwareData(SoftwareData);
    setCourseData(CourseData);
    setTeamData(TeamData);
    
  }, []);

  return (
    <div className='App'>
     
      
     <NavBar />
    
    <Routes>

    
    <Route path="/about" element={<About value={data}/>}/>
    <Route path="/" element={<Home  value={data}/>}/>
    <Route path="/softwares" element={<Software value={softwareData}   />}/>
    <Route path="/courses" element={<Courses  value={courseData} />}/>
    <Route path="/directions" element={<Directions />}/>
    
    

  </Routes>
  
  
  




        <Footer />
    

  
    </div>
  );
};

export default App;

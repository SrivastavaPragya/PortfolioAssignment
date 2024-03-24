import React, { useState,useEffect } from 'react'
import About from './assets/components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../src/App.css'

import Services from './assets/components/Services';
import Skills from './assets/components/Skills';
import Project from './assets/components/Project';
import Testimonial from './assets/components/Testimonial';
import WorkExperience from './assets/components/WorkExperience';
import Contact from './assets/components/Contact';
import HomePage from './assets/components/HomePage';
import Navbar from './assets/components/Navbar';




const App = () => {

  const[apidata,setApidata]=useState(null);

  // function to fetch
 

    const fetchData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        
        if (data.success ) {
       
          
          setApidata(data.user); 
          console.log(data.user);
        } else {
          throw new Error('Failed to fetch the about data');
        }
      } catch (error) {
        console.error("Could not fetch the data: ", error.message);
      }
    };
    
  
  

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
    <Router>
  
  <Navbar/>
      <Routes>

     

      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About aboutData={ apidata && apidata.about} />} />
      <Route path="/services" element={<Services servicesData={ apidata && apidata.services}/>} />
      <Route path="/skill" element={<Skills   skillsData={apidata && apidata.skills}/>} />
      <Route path="/project" element={<Project projectData={apidata && apidata.projects} />} />
      <Route path="/testimonial" element={<Testimonial testimonialsData={apidata && apidata.testimonials} />} />
      <Route path="/work" element={<WorkExperience workData={apidata&& apidata.timeline} />} />
      <Route path="/contact" element={<Contact />} />
      
      
      </Routes>
    </Router>
  </div>
  )
}

export default App

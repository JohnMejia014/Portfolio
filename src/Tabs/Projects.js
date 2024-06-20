// src/Projects.js
import React from 'react';
import TabsDropdown from './TabBar';
import './Projects.css';  // Create a new CSS file for Projects component specific styles
import KickOffConnect from './Components/KickOffConnect';
import CVProject from './Components/CVProject';
import Website from './Components/Website';
import DMP from './Components/DMP';
const Projects = () => {

  return (
    <div className="App" id="projects">
      <div className="App-header">
        <TabsDropdown />
      </div>
      <div className="content-container">
        <div className="name-container">
          <h1 className="name">
            Projects                
          </h1>
        </div>
        <div className="projects-grid">
          <KickOffConnect/>
          <CVProject/>
          <Website/>
          <DMP/>
        </div>
      </div>  
    </div>  
  );
};

export default Projects;

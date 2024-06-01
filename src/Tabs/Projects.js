// src/Projects.js
import React from 'react';
import TabsDropdown from './TabBar';
import ProjectComponent from './Components/ProjectComponent';
import './Projects.css';  // Create a new CSS file for Projects component specific styles
import appImage from ''
const Projects = () => {
  const projectData = [
    {
      title: "KickOff Connect Play Nearby",
      description: "Capstone Full Stack App Developer",
      details: "Led the development of a multi-sport pickup app using React Native, Expo, and Google Maps API Responsible for designing, creating, developing, and testing the front end of the app Utilized Amazon S3 for storing posts and profile pictures, and managed user and event information with DynamoDB Collaborated with a cross-functional team of students and mentors to implement features and ensure seamless integration of front end with backend systems",
      imageUrl: '../ProjectImages/KickOffConnectDiscoveryScreen.png',
    },
    {
      title: "Project 2",
      description: "This is a brief description of project 2.",
      details: "Detailed information about project 2.",
      imageUrl: "path_to_project2_image.jpg",
    },
    // Add more projects as needed
  ];
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
          {projectData.map((project, index) => (
            <ProjectComponent key={index} project={project} />
          ))}
        </div>
      </div>  
    </div>  
  );
};

export default Projects;

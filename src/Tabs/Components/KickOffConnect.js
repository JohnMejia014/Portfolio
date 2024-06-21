// src/Project.js
import React, { useState } from 'react';
import './KickOffConnect.css';
import kickoffImage from '../ProjectImages/KickOffConnectDiscoveryScreen.png'
const KickOffConnect = ({projectClicked}) => {
  const project= 
    {
      title: "KickOff Connect Play Nearby",
      description: "Capstone Full Stack App Developer",
      details: "Led the development of a multi-sport pickup app using React Native, Expo, and Google Maps API Responsible for designing, creating, developing, and testing the front end of the app Utilized Amazon S3 for storing posts and profile pictures, and managed user and event information with DynamoDB Collaborated with a cross-functional team of students and mentors to implement features and ensure seamless integration of front end with backend systems",
      imageUrl: kickoffImage,
    };
  
  return (
    <div className="project-item">
      <img src={kickoffImage} alt={project.imageUrl} className="project-image" onClick={() => projectClicked("KickOffConnect")} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default KickOffConnect;

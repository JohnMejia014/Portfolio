// src/Project.js
import React, { useState } from 'react';
import './Website.css';
import WebsiteImage from '../ProjectImages/Website.png'
const Website = () => {
  const project= 
    {
      title: "Resource Management Website",
      description: "Lead Backend Developer",
      details: "The project successfully leveraged YOLOv5 for object detection and explored various pose estimation techniques to track juggling attempts. Despite some challenges, the integration of these technologies showed promising results in accurately counting juggles. Future improvements, including a deployable app and enhanced tracking methods, aim to make the tool more user-friendly and effective, helping soccer players improve their juggling skills in a fun and competitive way.",
      imageUrl: WebsiteImage,
    };
  const onClickListener = () => console.log("this is the project", project);;
  
  return (
    <div className="project-item">
      <img src={project.imageUrl} alt={project.imageUrl} className="project-image" onClick={onClickListener} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default Website;

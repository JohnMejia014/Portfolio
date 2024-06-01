// src/Project.js
import React, { useState } from 'react';
import './ProjectComponent.css';
const ProjectComponent = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="project-item">
      <img src={project.imageUrl} alt={project.imageUrl} className="project-image" onClick={openModal} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{project.title}</h2>
            <img src={project.imageUrl} alt={project.imageUrl} className="modal-image" />
            <p>{project.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;

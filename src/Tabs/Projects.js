// src/Projects.js
import React, {useState} from 'react';
import TabsDropdown from './TabBar';
import './Projects.css';  // Create a new CSS file for Projects component specific styles
import KickOffConnect from './Components/KickOffConnect';
import CVProject from './Components/CVProject';
import Website from './Components/Website';
import DMP from './Components/DMP';
import KickOffConnectModal from './ProjectModals/KickOffConnectModal';
import DMPModal from './ProjectModals/DMPModal';
import WebsiteModal from './ProjectModals/WebsiteModal';
import CVProjectModal from './ProjectModals/CVProjectModal';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    console.log("setting to false");
    setShowModal(false);
  };

  const renderModal = () => {
    switch (selectedProject) {
      case 'KickOffConnect':
        return <KickOffConnectModal closeModal={closeModal} project={selectedProject}/>;
      case 'CVProject':
        return <CVProjectModal closeModal={closeModal} project={selectedProject}/>;
      case 'Website':
        return <WebsiteModal closeModal={closeModal} project={selectedProject}/>;
      case 'DMP':
        return <DMPModal closeModal={closeModal} project={selectedProject}/>;
      default:
        return null;
    }
  };
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
          <KickOffConnect projectClicked={() => openModal('KickOffConnect')}/>
          <CVProject projectClicked={() => openModal('CVProject')}/>
          <Website projectClicked={() => openModal('Website')}/>
          <DMP projectClicked={() => openModal('DMP')}/>
        </div>
      </div>  
      {showModal && renderModal()}
    </div>  
  );
};

export default Projects;

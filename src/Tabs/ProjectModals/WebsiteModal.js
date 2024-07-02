import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import './WebsiteModal.css';
import img1 from '../Components/WebsiteFiles/Websiteimg1.png';
import img2 from '../Components/WebsiteFiles/Websiteimg2.png';
import img3 from '../Components/WebsiteFiles/Websiteimg3.png';
import img4 from '../Components/WebsiteFiles/Websiteimf4.png';
import img5 from '../Components/WebsiteFiles/Websiteimg5.png';
import img6 from '../Components/WebsiteFiles/Websiteimg6.png';
import img7 from '../Components/WebsiteFiles/Websiteimg7.png';

const WebsiteModal = ({ projectClicked, closeModal, project }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-button">
          <Button variant="contained" color="primary" onClick={closeModal}>
            Close
          </Button>
        </div>
        <Typography variant="h4" component="h2" gutterBottom>
          Resource Management Website
        </Typography>

        <Typography variant="h6" component="h3">
          <a href='https://github.com/paripat2504/461L-Software-Lab-Project' target="_blank" rel="noopener noreferrer">GitHub Link</a>
        </Typography>

        <div className="section">
          <Typography variant="h6" component="h3">
            My Role
          </Typography>
          <Typography variant="body1" component="p">
            Led the development of the back end for a resource management website, utilizing Python Flask for server-side logic. 
          </Typography>
          <Typography variant="body1" component="p">
          Implemented robust MongoDB database management, ensuring efficient storage and retrieval of resources. 
          </Typography>
          <Typography variant="body1" component="p">
          Collaborated seamlessly with front-end developers to integrate the back-end functionalities, creating a cohesive and responsive user experience. 
          </Typography>
          <Typography variant="body1" component="p">
          Successfully deployed the website on Heroku, overseeing the entire back-end infrastructure.
          </Typography>
        </div>

        <div className="section">
          <Typography variant="h6" component="h3">
            System Review
          </Typography>
          <Typography variant="body1" component="p">
            The application user initially creates a UserID and password or already has a preexisting one and logs in. The information is checked/added to the database and if valid, the user is sent to the home screen.
          </Typography>
          <img src={img1} alt='Home Screen' />
        </div>

        <div className="section">
          <Typography variant="body1" component="p">
            In the home screen, the user can view current resources, availability, and total capacity.
          </Typography>
          <img src={img2} alt='Resource View' />
        </div>

        <div className="section">
          <Typography variant="body1" component="p">
            In the center of the screen, the user can scroll through a list of all projects and look at the details, by clicking on them, which creates a popup the user can see. In this popup, the user can also check in and out resources for the project.
          </Typography>
          <img src={img3} alt='Project Details' style={{ width: '90%', height: '90%' }} />
        </div>

        <div className="section">
          <img src={img4} alt='Project Popup' />
          <Typography variant="body1" component="p">
            The user can also select to add a project which creates a popup where the user can add information about the project.
          </Typography>
          <img src={img5} alt='Add Project' />
        </div>

        <div className="section">
          <Typography variant="body1" component="p">
            Additionally, the user can request to join existing projects via another popup.
          </Typography>
          <img src={img6} alt='Join Project' />
        </div>

        <div className="section">
          <Typography variant="body1" component="p">
            Finally, to sign out, the user can simply select the sign-out button.
          </Typography>
          <img src={img7} alt='Sign Out' style={{ width: '95%', height: '95%' }} />
        </div>
      </div>
    </div>
  );
};

export default WebsiteModal;

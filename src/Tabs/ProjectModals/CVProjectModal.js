// Create a new file, e.g., Modal.js
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import YouTubeEmbed from '../Components/YoutubeEmbed';
import Juggling1 from '../Components/CVProjectFiles/Juggling1.mp4'
import Juggling2 from '../Components/CVProjectFiles/Juggling2.mp4'
import VideoPlayer from '../Components/VideoPlayer';
import pdf from '../Components/CVProjectFiles/CVProject.pdf'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './CVProjectModal.css' 

const CVProjectModal = ({ projectClicked, closeModal, project }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div className="modal">
      <div className="modal-content">
      <Button variant="contained" color="primary" onClick={closeModal}>
        close
       </Button>       
       <h2>Computer Vision Project</h2>
     
        
        <div className='Videos'>
        <VideoPlayer src={Juggling1} width="300" height="169" />
        <VideoPlayer src={Juggling2} width="300" height="169" />
        </div>

        <div className='ytvid'>
        <YouTubeEmbed videoId="s3qSHXR1rNU"/>
        </div>


        <h3>
          Final Report
        </h3>
        <div className="pdf">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdf}
              onDocumentLoadSuccess={onDocumentLoadSuccess}
              currentPage={pageNumber}
              defaultScale={1} // Set defaultScale to 1 to display one page at a time
              zoom={3} // Zoom level
              style={{ width: '100%' }} // Ensure the viewer takes up the full width
            />
          </Worker>
        </div>      


      </div>
    </div>
  );
};

export default CVProjectModal;
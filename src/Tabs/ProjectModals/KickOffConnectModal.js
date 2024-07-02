// Create a new file, e.g., Modal.js
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import VideoPlayer from '../Components/VideoPlayer';
import report from '../Components/KickOffConnectFiles/KickOffConnectReport.pdf'
import video from '../Components/KickOffConnectFiles/KickOffConnectVideo.mp4'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './KickOffConnectModal.css'
const KickOffConnectModal = ({ projectClicked, closeModal, project }) => {
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
        <h2>
          KickOffConnect
        </h2>

        <div className='Video'>
          <VideoPlayer src={video} width="800" height="450" />
        </div>
      
        <h3>
          Presentation
        </h3>
        <div className='Report'>
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={report}
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

export default KickOffConnectModal;
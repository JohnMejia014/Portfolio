import React from 'react';
import TabsDropdown from './TabBar';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdf from './ProjectImages/John-Mejia-Software Engineer.pdf'
import pdf2 from './ProjectImages/Transcript.pdf'
import './Artifacts.css'
function Artifacts() {
  return(
    <div className="artifacts" id="artifacts">
        <div className="App-header">
        <TabsDropdown />
        </div> 
        <div className="content-container">
            <div className="name-container">
                <h1 className="name">
                    Artifacts                
                </h1>
            </div>


            <h2>Resume</h2>
            <div className='pdf'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdf} />
                </Worker>
                <a href={pdf} download="John-Mejia-Software Engineer.pdf" className="download-button">
              Download Resume
            </a>
            </div>


            <h2>Transcipt</h2>
            <div className='pdf'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdf2} />
                </Worker>
                <a href={pdf2} download="Transcript.pdf" className="download-button">
              Download Transcript
            </a>
            </div>
        </div>   
    </div>  
); 
}


export default Artifacts;
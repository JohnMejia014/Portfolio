import React from 'react';
import TabsDropdown from './TabBar';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdf from './ProjectImages/John-Mejia-Software Engineer.pdf'
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
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdf} />
                    </Worker>
            </div>
        </div>   
    </div>  
); 
}


export default Artifacts;
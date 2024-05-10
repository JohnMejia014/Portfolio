import React from 'react';
import TabsDropdown from './TabBar';

function Projects() {
  return(
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
        </div>  
    </div>  
); 
}


export default Projects;
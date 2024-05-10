import React from 'react';
import TabsDropdown from './TabBar';

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
        </div>   
    </div>  
); 
}


export default Artifacts;
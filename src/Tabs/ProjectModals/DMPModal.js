// Create a new file, e.g., Modal.js
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import VideoPlayer from '../Components/VideoPlayer';
import Trickshot from '../Components/DMPFiles/ScreenTrickShot.mp4'
import Messi from '../Components/DMPFiles/RotoScopeMessi_1.mp4'
import MotionGraphics from '../Components/DMPFiles/FinalMotionGraphics.mp4'
import Thinking from '../Components/DMPFiles/ThinkingAnimation.mp4'
import Compositing from '../Components/DMPFiles/Compositing.mp4'
import StarWarsPoster from '../Components/DMPFiles/StarWarsPoster.jpg'
import './DMPModal.css'
const DMPModal = ({ projectClicked, closeModal, project }) => {

    const [projectIndex, setProjectIndex] = useState(1);
   
  const handlePrevClick = () => {
    setProjectIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : 1));
  };

  const handleNextClick = () => {
    setProjectIndex((prevIndex) => (prevIndex < 6 ? prevIndex + 1 : 6)); 
  };
    const renderProject = () => {
        switch (projectIndex) {
          case 1:
            return (
                <div key={1}>
                    <h2>Split Screen Trickshot</h2>
                    <p>Used Adobe Premier to create this mask to give the illusion that I am interacting with myself</p>
                    <VideoPlayer src={Trickshot} width="800" height="450" />
                </div>
            );
          case 2:
            return (
                <div key={2}>
                    <h2>Rotoscope Messi</h2>
                    <p>Used Adobe Animate to animate a stock video of messi juggling using rotoscoping techniques</p>
                    <VideoPlayer src={Messi} width="800" height="450" />
                </div>
            );
          case 3:
            return (
                <div key={3}>
                    <h2>Motion Graphics</h2>
                    <p>Used Adobe After Effects to design a motion graphics video for an intro the Digital Media Production class</p>
                    <VideoPlayer src={MotionGraphics} width="800" height="450" />
                </div>
            );          
        case 4:
            return (
                <div key={4}>
                    <h2>Thinking Animation</h2>
                    <p>Used Adobe Animate to animate a stock video of a man thinking using rotoscope techniques</p>
                    <VideoPlayer src={Thinking} width="800" height="450" />
                </div>
            );   
        case 5:
            return (
                <div key={5}>
                    <h2>Compositing</h2>
                     <p>Used Adobe After Effects and compositing techniques to take a 3D stock image of a man walking and insert that into another stock image. </p>
                      <VideoPlayer src={Compositing} width="800" height="450" />
               </div>
                );         
        case 6:
            return (
                <div key={6}>
                    <h2>Star Wars Poster</h2>
                        <p>Used Adobe Photoshop to create a movie poster about a fictional movie</p>
                        <img src={StarWarsPoster} alt="StarWarsPoster"/>
                </div>
                        );     
        default:
            return null;
        }
      }; 
  return (
    <div className="modal">
      <div className="modal-content">
      <Button variant="contained" color="primary" onClick={closeModal}>
        close
       </Button>
        <h1>Digital Media Production Projects</h1>
             <div className='Content'>
                    {renderProject()}
            </div>
        <div className='arrow'>
        <Button className="arrowleft" onClick={handlePrevClick}>
            &lt;
          </Button>
          
          <Button className="arrowright" onClick={handleNextClick}>
            &gt;
          </Button>
          </div>
          <p>{projectIndex}/6</p>
        </div>
      </div>
  );
};

export default DMPModal;
// Create a new file, e.g., Modal.js
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import VideoPlayer from '../Components/VideoPlayer';
import Trickshot from '../Components/DMPFiles/ScreenTrickShot.mp4'
import Messi from '../Components/DMPFiles/RotoScopeMessi_1.mp4'
const DMPModal = ({ projectClicked, closeModal, project }) => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videos = [Trickshot, Messi];
    const handlePrevClick = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className="modal">
      <div className="modal-content">
      <Button variant="contained" color="primary" onClick={closeModal}>
        close
       </Button>
        <h1>Digital Media Production Projects</h1>


        <div className="video-container">
        <h2>Split Screen Trickshot</h2>
        <p>Used Adobe Premier to create this mask to give the illusion that I am interacting with myself</p>
        <VideoPlayer src={Trickshot} width="800" height="450" />
        <Button className="arrow arrow-left" onClick={handlePrevClick}>
            &lt;
          </Button>
          
          <Button className="arrow arrow-right" onClick={handleNextClick}>
            &gt;
          </Button>
        {/* <h2>Rotoscope Messi</h2>
        <p>Used Adobe Animate to animate a stock video of messijuggling using rotoscoping techniques</p>
        <VideoPlayer src={Messi} width="800" height="450" /> */}
        </div>
      </div>
    </div>
  );
};

export default DMPModal;
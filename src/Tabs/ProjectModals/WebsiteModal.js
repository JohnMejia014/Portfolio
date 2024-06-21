// Create a new file, e.g., Modal.js
import React from 'react';
import Button from '@material-ui/core/Button';

const WebsiteModal = ({ projectClicked, closeModal, project }) => {
  return (
    <div className="modal">
      <div className="modal-content">
      <Button variant="contained" color="primary" onClick={closeModal}>
        close
       </Button>
        <h2>Project Details</h2>
        <p>{project}</p>
      </div>
    </div>
  );
};

export default WebsiteModal;
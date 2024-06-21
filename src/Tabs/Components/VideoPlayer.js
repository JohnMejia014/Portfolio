import React from 'react';

const VideoPlayer = ({ src, width, height }) => {
  return (
    <div className="video-container">
      <video width={width} height={height} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
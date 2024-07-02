import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;

import React from 'react'

function Youtube() {
  return (
    <>
        <h2 id="about" className="sections">About tiff</h2>
        <div id="video-container">
        <iframe 
            id="video"
            src="https://www.youtube.com/embed/wvGqc6zy3UI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        </div>
    </>
  );
};

export default Youtube;
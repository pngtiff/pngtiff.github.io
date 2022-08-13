import React from 'react'

function Intro() {
  return (
    <>
    <h2 id="choose" className="sections">Why Choose tiff</h2>
    <div id="features-container">
        <div id="feature-image1">
            <img src={require("../images/feature1.png")} className="icon" />
        </div>
        <div id="feature1">
            <h3>Native English Speaker</h3>
            <p>
            Learn with a native English speaker, who understands the difficulties
            of learning a new language
            </p>
        </div>
        <div id="feature-image2">
            <img src={require("../images/feature2.png")} className="icon" />
        </div>
        <div id="feature2">
            <h3>Personalized Lessons</h3>
            <p>
            Structured textbook lessons tailored to your learning process and
            interests
            </p>
        </div>
        <div id="feature-image3">
            <img src={require("../images/feature3.png")} className="icon" />
        </div>
        <div id="feature3">
            <h3>No Pressure!</h3>
            <p>Learning a new language should be fun, so don't stress about it!</p>
        </div>
    </div>
    </>
  );
};

export default Intro;
import React from 'react'

function Pricing() {
  return (
    <>
    <h2 id="prices" className="sections">Pricing</h2>
    <div id="pricing">
        <div id="pricing-container">
            <h4 className="lesson">Conversational<br />(30 Minutes)</h4>
            <p className="price">$10<br /><span className="price2">(per class)</span></p>
            <p id="desc">
            1-on-1 conversation practices for 30 minutes<br />
            Try speaking casually with no pressure!
            </p>
            <button className="selectBtn" type="submit">Select</button>
        </div>
        <div id="pricing-container">
            <h4 className="lesson">1-on-1<br />(50 Minutes)</h4>
            <p className="price">$30<br /><span className="price2">(per class)</span></p>
            <p id="desc">
            1-on-1 guided lessons for 50 minutes<br />
            Lesson structure based on textbooks
            </p>
            <button className="selectBtn" type="submit">Select</button>
        </div>
        <div id="pricing-container">
            <h4 className="lesson">Group Lesson<br />(50 Minutes)</h4>
            <p className="price">
            $20<br /><span className="price2">(per student per class)</span>
            </p>
            <p id="desc">
            Learn with friends for more fun!<br />
            Lesson structure based on textbooks
            </p>
            <button className="selectBtn" type="submit">Select</button>
        </div>
    </div>
    </>
  );
};

export default Pricing;
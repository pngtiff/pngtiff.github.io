import React from 'react'

function Signup() {
  return (
    <section id="signup">
      <div id="main-text">
        <h2>Enjoy English!</h2>
        <p>
          Your first step toward becoming<br />more comfortable with<br />speaking
          English<br />~<br />Sign up to learn more today
        </p>
        <form id="form" action="">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <br />
          <input id="signUpBtn" type="submit" value="Get Started" className="signUpBtn" />
        </form>
      </div>
      <div id="main-image">
        <img id="main-image" src={require("../images/main.png")} />
      </div>
    </section>
  );
};

export default Signup;
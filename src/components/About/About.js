import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="heading">About Me</h1>
          <div className="about-details">
            <div className="about-text">
              <h2>Hi,Myself <span className="name">Nilesh Rathod</span></h2>
              <h3> And I'am a <span>WEB DESIGNER</span></h3>
             <p> I'm a frontend Developer with a pasion for creating interactive And user-friendly web-application</p>
             <a href="Images/JS.png" className="btn">Resume</a>
             <a href="#Contact" className="btn">Contact me</a>
            </div>
            <div className="about-image">
              <img src="./Images/nil.jpg" alt="Nilesh Rathod" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

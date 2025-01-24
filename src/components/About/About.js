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
              <h2>Hello, I'm <span className="name">Nilesh Rathod</span></h2>
              <h3>I'M A WEB DESIGNER</h3>
              <p>
                I specialize in creating responsive designs, UX/UI interfaces, and interactive websites. 
                With a passion for crafting visually appealing and functional web experiences, 
                I aim to bring ideas to life through innovative design solutions.
              </p>
              <p>
                My expertise includes modern tools like React, JavaScript, and CSS frameworks. 
                I thrive on solving problems and delivering user-friendly applications.
              </p>
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

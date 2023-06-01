import React from "react";
import "./about.css";
import CV from "../../img/Josephine_CV.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <img src={about} alt="" className="a-img" />
        <img src={shape}alt="shape" class="shape"></img> */}

        <div className="blob"></div>
      </div>

      <div className="a-right">
        <div className="a-right__content">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            I'm a passionate professional in software development, 
            graphic design, and UI/UX.
          </p>
          <p className="a-desc">
            With a holistic mindset, I approach every project with a user-centered focus. 
            From developing custom web applications to crafting mobile app wireframes, 
            I invest my energy and expertise into perfecting even the smallest details. 
            Proficient in diverse programming languages and design tools, I thrive on 
            embracing new challenges and continuously expanding my skills. 
          </p>
          <div className="a-cv">
            <a
              href={CV}
              download="CV"
              className="a-cv-item"
              target="_blank"
              rel="noreferrer"
            >
              Download my cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

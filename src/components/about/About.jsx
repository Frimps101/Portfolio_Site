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
            I am a multidisciplinary creative with a passion for building
            beautiful and intuitive digital experiences.
          </p>
          <p className="a-desc">
            I'm a multi-talented software developer, graphic designer, and UI/UX designer who takes a holistic and user-centered approach to every project. 
            <br />
            Whether it's developing custom web applications or creating wireframes for mobile apps, I pour my heart and soul into every detail. I'm well-versed in a variety of programming languages and design tools, and I'm always eager to take on new challenges and grow both personally and professionally. 
            <br />So, if you're looking for someone who will care about your project as much as you do, please don't hesitate to reach out!
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

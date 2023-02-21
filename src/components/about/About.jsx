import React from "react";
import "./about.css";
import about from "../../img/me.png";
import shape from "../../img/blob.png"
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
            As a software developer, graphic designer, and UI/UX designer, I
            have a unique skillset that allows me to bring projects from concept
            to launch with a holistic and user-centered approach
            <br />
            I have had the opportunity to work on a wide range of projects, from
            developing custom web applications to designing brand identities and
            creating wireframes for mobile apps. I am proficient in a variety of
            programming languages and design tools.
            <br />I am always looking for new challenges and opportunities to
            grow as a developer and designer, so don't hesitate to reach out if
            you have a project in mind!
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

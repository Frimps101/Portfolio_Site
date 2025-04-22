import React from "react";
import "./intro.css";


const Intro = () => {
  return (
    <div className="i">
      {/* <div className="i-left"> */}
      <div className="i-left-wrapper">
        <h2 className="i-intro">My name is</h2>
        <h1 className="i-name">Josephine F Kwakye</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">App Developer</div>
            <div className="i-title-item">UI/UX Designer</div>
            <div className="i-title-item">Graphic Designer</div>
            <div className="i-title-item">Software Developer</div>
          </div>
        </div>
        <p className="i-desc">
          I design and develop stylish, modern artworks and websites.
          Researching, designing, implementing, and managing software programs.
        </p>
      </div>

      {/* </div> */}
      {/* <div className="i-right">
                <div className="i-circle"></div>
            </div> */}
    </div>
  );
};

export default Intro;

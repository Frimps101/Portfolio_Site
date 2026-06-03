import React from "react";
import "./project.css";
import { products } from "../../data";
import { Link } from "react-router-dom";
import ProjectGrid from "./ProjectGrid";

const Project = () => {
  return (
    <>
      <div className="content-container mt-[10rem] text-center">
        <h1 className="pl-title">Create & Inspire & Discover</h1>
        <p className="pl-desc">
          Check out my portfolio for your creative needs and more.
        </p>
      </div>

      <div className="content-container">
        <ProjectGrid projects={products} />
      </div>

      <div className="content-container text-center mt-10">
        <Link to="/projects" className="project-view-more">
          View More Projects
        </Link>
      </div>
    </>
  );
};

export default Project;

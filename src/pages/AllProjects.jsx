import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../data";
import ProjectGrid from "../components/projects/ProjectGrid";
import Toggle from "../components/toggle/Toggle";
import { ThemeContext } from "../context";
import "./allProjects.css";

const AllProjects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="all-projects"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "inherit",
        minHeight: "100vh",
      }}
    >
      <Toggle />
      <header className="all-projects-header content-container">
        <Link to="/" className="all-projects-back">
          &#8592; Back
        </Link>
        <span className="all-projects-name">Josephine F Kwakye</span>
      </header>

      <div className="content-container">
        <div className="all-projects-intro">
          <h1 className="pl-title">All Projects</h1>
          <p className="pl-desc">
            A complete look at my portfolio work and experiments.
          </p>
        </div>
        <ProjectGrid projects={allProducts} />
      </div>
    </div>
  );
};

export default AllProjects;

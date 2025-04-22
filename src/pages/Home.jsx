import React from "react";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";
import ProductList from "../components/productList/ProductList";
import Contact from "../components/contacts/Contact";
import Toggle from "../components/toggle/Toggle";
import Project from "../components/projects/Project";
import { ThemeContext } from "../context";
import { useContext } from "react";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      {/* <ProductList /> */}
      <Project />
      <Contact />
    </div>
  );
};

export default Home;

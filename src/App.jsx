import "tailwindcss/tailwind.css";
import { ThemeContext } from "./context";
import { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import Error from "./pages/Error";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    // <div
    //   style={{
    //     backgroundColor: darkMode ? "#222" : "white",
    //     color: darkMode && "white",
    //   }}
    // >
    //   <Toggle />
    //   <Intro />
    //   <About />
    //   {/* <ProductList /> */}
    //   <Project />
    //   <Contact />
    // </div>

    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1 }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </motion.div>
  );
};

export default App;

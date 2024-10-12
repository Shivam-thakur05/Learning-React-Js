import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import "./App.css";

function App() {
  return (
   <>
    <Navbar />
    <div className="container">
      <Home />
      <Experience />
    </div>
    
    <Projects />
    
    <Skills />
    <Contact />
   </>
  );
}

export default App;

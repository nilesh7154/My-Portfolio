// import Home from "./Home"
import React from "react";
import Nav from "./components/Navbar/Nav"
import Skills from "./components/Skills/Skills";
import { SkillArr } from "./Data";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let arr = ['Home','About', 'Contact', 'Services']
  console.log(SkillArr,"inside app")
  return (
    <div>
      <Nav />
      <About/>
      <Education/>
      <Skills  skill={SkillArr} skill2 = {arr} />
      <Contact/>
      <Footer />{}
      
    </div>

  );
}

export default App;
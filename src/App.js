import Navbar from "./components/navbar/Navbar";
import React from "react";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import DummyElement from "./DummyElement.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ExpandProj from "./components/expandProj/ExpandProj";

function App() {
  const bannerRef = React.createRef();
  const aboutRef = React.createRef();
  const skillsRef = React.createRef();
  const projectsRef = React.createRef();

  const refsObject = {
    home: bannerRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects/:name" element={<ExpandProj />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/owner/:name" element={<DummyElement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

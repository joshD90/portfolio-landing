import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import ProjectContainer from "./components/projects/ProjectContainer";
import Navbar from "./components/navbar/Navbar";
import React from "react";

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
    <div>
      <Navbar refs={refsObject} />
      <Banner ref={bannerRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <ProjectContainer ref={projectsRef} />
    </div>
  );
}

export default App;

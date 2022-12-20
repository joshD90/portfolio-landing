import React from "react";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import ProjectContainer from "../components/projects/ProjectContainer";
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <ProjectContainer />
    </>
  );
};

export default Home;

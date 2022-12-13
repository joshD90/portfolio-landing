import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import ProjectContainer from "./components/projects/ProjectContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <ProjectContainer />
    </div>
  );
}

export default App;

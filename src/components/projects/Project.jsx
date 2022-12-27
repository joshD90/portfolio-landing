import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { HashLink } from "react-router-hash-link";
import "./project.scss";

const Project = React.forwardRef(({ project }, ref) => {
  const projectName = project.header.split(" ")[0].toLowerCase();
  return (
    <div className="container" ref={ref}>
      <div className="bannerImg">
        <img src={project.banner} />
      </div>
      <div className="descContainer">
        <h3>{project.header}</h3>
        <p>{project.desc}</p>
        <button className="findMore">
          <HashLink smooth to={`/projects/${projectName}#top`}>
            Find Out More
          </HashLink>
        </button>
      </div>
      <div className="buttonDiv">
        <a href={project.siteLink}>
          <button className="light">View Live Project</button>
        </a>
        <a href={project.gitLink}>
          <button className="dark">
            GitHub Code
            <GitHubIcon style={{ marginLeft: "0.5rem" }} />
          </button>
        </a>
      </div>
    </div>
  );
});

export default Project;

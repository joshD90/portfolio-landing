import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./project.scss";

function Project({ project }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="bannerImg">
          <img src={project.banner} />
        </div>
        <div className="descContainer">
          <h3>{project.header}</h3>
          <p>{project.desc}</p>
          <span>{project.highlights}</span>
          <h4 style={{ marginBottom: "0.1rem" }}>Techs Used</h4>
          <p
            style={{
              fontWeight: 600,
              fontStyle: "normal",
              marginTop: "0.2rem",
            }}
          >
            {project.techs}
          </p>
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
    </div>
  );
}

export default Project;

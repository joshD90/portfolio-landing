import React from "react";
import bannerImg from "../../assets/projects/cssProjBanner.png";
import "./project.scss";
function Project({ project }) {
  return (
    <div className="container">
      <div className="bannerImg">
        <img src={bannerImg} />
      </div>
      <div className="descContainer">
        <h3>{project.header}</h3>
        <p>{project.desc}</p>
        <span>{project.highlights}</span>
        <h4 style={{ marginBottom: "0.1rem" }}>Techs Used</h4>
        <p style={{ fontWeight: 600, fontStyle: "normal" }}>{project.techs}</p>
      </div>
    </div>
  );
}

export default Project;

import React from "react";
import "./projectContainer.scss";
import Project from "./Project";
import { staticInfo } from "./projectInfo";
import { eCommerceInfo } from "./projectInfo";

function ProjectContainer() {
  return (
    <div className="projectContainer">
      <span>Projects</span>
      <Project project={eCommerceInfo} />
      <Project project={staticInfo} />
      <Project project={staticInfo} />
    </div>
  );
}

export default ProjectContainer;

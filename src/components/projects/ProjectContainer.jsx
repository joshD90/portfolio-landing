import React from "react";
import "./projectContainer.scss";
import Project from "./Project";
import { staticInfo } from "./projectInfo";
import { eCommerceInfo } from "./projectInfo";
import { chessProjInfo } from "./projectInfo";

function ProjectContainer() {
  return (
    <div className="projectContainer">
      <span>Projects</span>
      <Project project={chessProjInfo} />
      <Project project={staticInfo} />
      <Project project={eCommerceInfo} />
    </div>
  );
}

export default ProjectContainer;

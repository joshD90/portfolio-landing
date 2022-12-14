import React from "react";
import "./projectContainer.scss";
import Project from "./Project";
import { staticInfo } from "./projectInfo";
import { eCommerceInfo } from "./projectInfo";
import { chessProjInfo } from "./projectInfo";

const ProjectContainer = React.forwardRef((props, ref) => {
  return (
    <div className="projectContainer" ref={ref} id="projects">
      <span>Projects</span>
      <Project project={chessProjInfo} />
      <Project project={staticInfo} />
      <Project project={eCommerceInfo} />
    </div>
  );
});

export default ProjectContainer;

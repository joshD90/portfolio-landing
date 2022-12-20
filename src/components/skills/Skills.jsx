import React from "react";
import "./skills.scss";
import SkillCard from "./SkillCard";

const backendSkills = [
  "Node",
  "Express",
  "MongoDB",
  "Mongoose",
  "Restful API's",
  "Socket.io",
];
const frontendSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Redux",
  "Sass",
  "Styled-Components",
];
const otherSkills = ["NGinX", "Git", "Github", "VScode", "Heroku", "VPS"];

const Skills = React.forwardRef((props, ref) => {
  return (
    <div className="skillsContainer" ref={ref} id="skills">
      <span>Skillset</span>
      <SkillCard header="Frontend" skillList={frontendSkills} />
      <SkillCard header="Backend" skillList={backendSkills} />
      <SkillCard header="Other" skillList={otherSkills} />
    </div>
  );
});

export default Skills;

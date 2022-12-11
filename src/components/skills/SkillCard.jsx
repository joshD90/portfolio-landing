import React from "react";
import "./skillCard.scss";

function SkillCard({ header, skillList }) {
  return (
    <div className="skillCardDiv">
      <div className="skillHeader">{header}</div>
      <div className="skillList">
        <ul>
          {skillList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;

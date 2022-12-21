import React from "react";
import Swiper from "../swiper/Swiper";
import "./expandProj.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

function ExpandProj() {
  return (
    <div className="expandContainer">
      {/* <h1 className="expandHeader">e-Commerce</h1> */}
      <div className="wrapperWrap">
        <div className="sliderWrapper">
          <Swiper />
        </div>
      </div>
      <div className="furtherInfo">
        <h2>All Projects were Self-Created with no Follow Along Tutorial</h2>
        <div className="buttonsDiv">
          <button>View Live Project</button>
          <button>
            View Code
            <GitHubIcon style={{ marginLeft: "0.5rem" }} />
          </button>
        </div>
        <div className="lists">
          <div className="projectLists">
            <h3>Technologies Used</h3>
            <ul>
              <li>React</li>
              <li>Styled Components</li>
              <li>Stripe Api</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Passport.js</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="projectLists">
            <h3>Key Learnings</h3>
            <li>
              I learned about tailoring individual cohesive style across a
              website to match the products that are being sold
            </li>
            <li>I made my own carousel in this project</li>
            <li>I learned about Firebase and storing and retrieving images</li>
            <li>I learned about making promises and promise.all</li>
            <li>
              I learned about managing an larger scale application with many
              different aspects and managing a larger code base
            </li>
            <li>
              More complex database documents and using aggregation in MongoDB
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandProj;

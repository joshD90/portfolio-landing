import React from "react";
import Swiper from "../swiper/Swiper";
import { useLocation } from "react-router-dom";
import "./expandProj.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  bnwImages,
  chessImages,
  chessProjInfo,
  eCommerceInfo,
  staticImages,
  staticInfo,
} from "../projects/projectInfo";

function ExpandProj() {
  let { pathname } = useLocation();
  const projectName = pathname.split("/")[2];

  let info;
  let swiperImages;
  if (projectName === "e-commerce") {
    swiperImages = bnwImages;
    info = eCommerceInfo;
  }
  if (projectName === "static") {
    swiperImages = staticImages;
    info = staticInfo;
  }
  if (projectName === "chess") {
    swiperImages = chessImages;
    info = chessProjInfo;
  }

  return (
    <div className="expandContainer">
      <h1 className="expandHeader">{info.name}</h1>
      <div className="wrapperWrap">
        <div className="sliderWrapper">
          <Swiper swiperImages={swiperImages} />
        </div>
      </div>
      <div className="furtherInfo">
        <div className="buttonsDiv">
          <button>View Live Project</button>
          <button>
            View Code
            <GitHubIcon style={{ marginLeft: "0.5rem" }} />
          </button>
        </div>
        <div className="whyDiv"></div>
        <h2>Why this Project?</h2>
        {info.motivation.map((par, index) => {
          console.log(par);
          return (
            <div className="whyDiv" key={index}>
              <p key={index}>{par}</p>
              <hr className="whyHr" />
            </div>
          );
        })}

        <div className="lists">
          <div className="projectLists">
            <h3>Technologies Used</h3>
            <ul>
              {info.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="projectLists">
            <h3>Key Learnings</h3>
            <ul>
              {info.keyLearnings.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandProj;

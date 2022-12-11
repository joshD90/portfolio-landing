import React, { useRef } from "react";
import Ball from "../ball/Ball";
import "./banner.scss";
import { pngArray } from "../../assets/banner/pngArray";
import profileCutout from "../../assets/banner/joshNDuncanCutout.png";

function Banner() {
  const bannerRef = useRef();

  return (
    <div className="bannerContainer" ref={bannerRef}>
      {pngArray.map((png, index) => (
        <Ball src={png} key={index} bannerRef={bannerRef} />
      ))}
      <div className="contentHolder">
        <h1>Hey!</h1>
        <h2>I Am Joshua Dancey</h2>
        <h2>A FullStack Web Developer</h2>
        <p>Click anywhere to see some of my skillset</p>
        <p>Scroll down to find out more about me</p>
      </div>
      <div className="imgHolder">
        <img src={profileCutout} />
      </div>
    </div>
  );
}

export default Banner;
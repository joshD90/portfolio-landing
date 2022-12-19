import React from "react";
import Swiper from "../swiper/Swiper";
import "./expandProj.scss";

function ExpandProj() {
  return (
    <div className="expandContainer">
      {/* <h1 className="expandHeader">e-Commerce</h1> */}
      <div className="wrapperWrap">
        <div className="sliderWrapper">
          <Swiper />
        </div>
      </div>
      <p>This is a paragraph underneath everything</p>
      <p>And this is another one. wonder why it is spaceing this way</p>
      <p>and lets slap another one under this one too</p>
    </div>
  );
}

export default ExpandProj;

import React, { useState, useEffect } from "react";
import "./navbar.scss";

function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [scrollPos, setScrollPos] = useState(0);
  const [dropped, setDropped] = useState(false);
  const [itemsHeight, setItemsHeight] = useState(0);
  const [halfHeight, setHalfHeight] = useState(0);

  useEffect(() => {
    const doScroll = () => {
      if (dropped) return;
      setScrollPos((prev) => {
        if (window.pageYOffset > prev) {
          setOpacity(0.3);
        } else setOpacity(0.8);
        return window.pageYOffset;
      });
    };
    window.addEventListener("scroll", doScroll);
    return () => {
      window.removeEventListener("scroll", doScroll);
    };
  }, [scrollPos, dropped]);

  useEffect(() => {
    const scrollTimer = setTimeout(() => setOpacity(0.9), 1000);
    return () => {
      clearTimeout(scrollTimer);
    };
  }, [scrollPos]);

  const doDrop = () => {
    if (!dropped) {
      setDropped(true);
      setOpacity(1);
      setHalfHeight("100%");
      setTimeout(() => setItemsHeight("100%"), 200);
    } else {
      setDropped(false);
      setOpacity(0.9);
      setHalfHeight(0);
      setTimeout(() => setItemsHeight("0%"), 200);
    }
  };

  return (
    <div className="navContainer" style={{ opacity: opacity }}>
      <div className="logoDiv">Portfolio</div>

      <div className="itemsDiv" style={{ height: itemsHeight }}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </div>
      <div className="dropDownHalf" style={{ height: halfHeight }} />
      <div
        className="burgerDiv"
        onClick={doDrop}
        style={{ border: dropped ? "1px solid #434242" : "1px solid white" }}
      >
        <span className={dropped ? "darkBurgerSpan" : ""} />
        <span className={dropped ? "darkBurgerSpan" : ""} />
        <span className={dropped ? "darkBurgerSpan" : ""} />
      </div>
    </div>
  );
}

export default Navbar;

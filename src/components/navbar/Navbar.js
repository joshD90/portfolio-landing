import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ refs }) => {
  const [opacity, setOpacity] = useState(1);
  const [scrollPos, setScrollPos] = useState(0);
  const [dropped, setDropped] = useState(false);
  const [itemsHeight, setItemsHeight] = useState(0);
  const [halfHeight, setHalfHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const doWindowScroll = () => {
      if (dropped) return;
      setScrollPos((prev) => {
        if (window.pageYOffset > prev) {
          setOpacity(0.3);
        } else setOpacity(0.8);
        return window.pageYOffset;
      });
    };
    window.addEventListener("scroll", doWindowScroll);
    return () => {
      window.removeEventListener("scroll", doWindowScroll);
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
      showDropped();
    } else {
      hideDropped();
    }
  };
  const hideDropped = () => {
    if (!dropped) return;
    setDropped(false);
    setOpacity(0.9);
    setHalfHeight(0);
    setTimeout(() => setItemsHeight("0%"), 200);
  };
  const showDropped = (e) => {
    setDropped(true);
    setOpacity(1);
    setHalfHeight("100%");
    setTimeout(() => setItemsHeight("100%"), 200);
  };
  const doScroll = (e) => {
    setTimeout(() => {
      refs[e.target.id].current.scrollIntoView({ behaviour: "smooth" });
    }, 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 630) {
        setDropped(false);
        setHalfHeight(0);
        setItemsHeight("3rem");
      } else {
        console.log("collapsed");
        if (!dropped) setHalfHeight(0);
        setItemsHeight(dropped ? "100%" : 0);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navContainer" style={{ opacity: opacity }}>
      <div className="logoDiv">Portfolio</div>

      <div className="itemsDiv" style={{ height: itemsHeight }}>
        <div className="navItem">
          <HashLink className="hashLink" smooth to="#">
            Main
          </HashLink>

          <div className="dropDiv">
            <HashLink
              className="hashLink"
              smooth
              to="/#banner"
              onClick={() => {
                if (dropped === true) {
                  hideDropped();
                }
              }}
            >
              Home
            </HashLink>
            <HashLink
              className="hashLink"
              smooth
              to="/#about"
              onClick={() => {
                if (dropped === true) {
                  hideDropped();
                }
              }}
            >
              About
            </HashLink>
            <HashLink
              className="hashLink"
              smooth
              to="/#skills"
              onClick={() => {
                if (dropped === true) {
                  hideDropped();
                }
              }}
            >
              Skills
            </HashLink>
            <HashLink
              className="hashLink"
              smooth
              to="/#projects"
              onClick={() => {
                if (dropped === true) {
                  hideDropped();
                }
              }}
            >
              Projects
            </HashLink>
            <a id="contact" onClick={doScroll}>
              Contact
            </a>
          </div>
        </div>
        <div className="navItem">
          <HashLink className="hashLink">Projects</HashLink>
          <div className="dropDiv">
            <HashLink
              className="hashLink"
              smooth
              to="/projects/chess#top"
              onClick={hideDropped}
            >
              Chess App
            </HashLink>
            <HashLink
              className="hashLink"
              smooth
              to="/projects/static#top"
              onClick={hideDropped}
            >
              Static Design
            </HashLink>
            <HashLink
              className="hashLink"
              smooth
              to="/projects/e-commerce#top"
              onClick={hideDropped}
            >
              e-Commerce
            </HashLink>
          </div>
        </div>
      </div>
      <div className="dropDownHalf" style={{ height: halfHeight }} />
      <div className="burgerDiv" onClick={doDrop}>
        <span className={dropped ? "darkBurgerSpan" : ""} />
        <span className={dropped ? "darkBurgerSpan" : ""} />
        <span className={dropped ? "darkBurgerSpan" : ""} />
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <HashLink smooth to="/#banner" style={{ textDecoration: "none" }}>
<a onClick={hideDropped}>Home</a>
</HashLink>
<HashLink smooth to="/#about">
<a onClick={hideDropped}>About</a>
</HashLink>
<HashLink smooth to="/#skills">
<a onClick={hideDropped}>Skills</a>
</HashLink>
<HashLink smooth to="/#projects">
<a onClick={hideDropped}>Projects</a>
</HashLink>
<a id="contact" onClick={doScroll}>
Contact
</a> */
}

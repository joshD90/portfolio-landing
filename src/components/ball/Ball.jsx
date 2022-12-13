import React, { useEffect, useRef, useState } from "react";
import "./ball.scss";
import anime from "animejs";

function Ball({ src, bannerRef }) {
  const ballRef = useRef();
  const [display, setDisplay] = useState("none");
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const doAnimate = (e) => {
      setDisplay("flex");
      anime({
        targets: ".ball",
        translateX: () => [e.clientX, anime.random(-width, width * 1.5)],
        translateY: () => [
          e.clientY + window.pageYOffset,
          anime.random(-height, height * 1.5),
        ],
        scale: () => anime.random(0.1, 1),
        opacity: () => [2, 0],
        duration: 10000,
        easing: "linear",
        loop: false,
      });
    };

    bannerRef.current.addEventListener("click", doAnimate);
    return () => bannerRef.current.removeEventListener("click", doAnimate);
  }, []);

  return (
    <div className="ball" ref={ballRef} style={{ display: display }}>
      <img src={src} />
    </div>
  );
}

export default Ball;

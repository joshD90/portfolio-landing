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
      const x = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
      const y = e.type === "touchend" ? e.changedTouches[0].clientY : e.clientY;
      setDisplay("flex");
      anime({
        targets: ".ball",
        translateX: () => [x, anime.random(-width, width * 1.5)],
        translateY: () => [
          y + window.pageYOffset,
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
    bannerRef.current.addEventListener("touchend", doAnimate);
    return () => {
      bannerRef.current.removeEventListener("click", doAnimate);
      bannerRef.current.removeEventListener("touchend", doAnimate);
    };
  }, []);

  return (
    <div className="ball" ref={ballRef} style={{ display: display }}>
      <img src={src} />
    </div>
  );
}

export default Ball;

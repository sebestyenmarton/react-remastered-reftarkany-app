import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface AnimationProps {
  view: string;
}

const ChirchAnimation: React.FC<AnimationProps> = ({ view }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: require("./chirch.json"),
      });
    }
  }, [container]);

  return <div className={`animation-container ${view}`} ref={container}></div>;
};

export default ChirchAnimation;

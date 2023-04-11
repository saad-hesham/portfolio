import React, { useState, useEffect, useRef } from "react";

const Progress = ({ percentage,skill }) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBar();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, []);

  const animateProgressBar = () => {
    const intervalId = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth < percentage) {
          return prevWidth + 5;
        } else {
          clearInterval(intervalId);
          return prevWidth;
        }
      });
    }, 10);
  };

  return (
    <div className="progress-block">
    {skill}
    <div className="progress-bar-container" ref={progressRef} >
      <div className="progress-bar" style={{ width: `${width}%` }}>
        {width > 0 && <span className="percentage">{`${width}%`}</span>}
      </div>
    </div>
    </div>
  );
};

export default Progress;
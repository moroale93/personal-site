import React, { useEffect, createRef } from 'react';
import gsap from 'gsap';

export default function Job() {
  const softwareRef = createRef();
  const engineerRef = createRef();

  useEffect(() => {
    gsap.from(softwareRef.current, {
      opacity: 0,
      xPercent: -100,
      duration: 1.3,
      scrollTrigger: {
        trigger: softwareRef.current,
        toggleActions: 'play reverse play none',
        end: 'top top',
      },
    });

    gsap.from(engineerRef.current, {
      opacity: 0,
      xPercent: 100,
      duration: 1.3,
      scrollTrigger: {
        trigger: engineerRef.current,
        toggleActions: 'play reverse play none',
        end: 'top top',
      },
    });
  }, [softwareRef, engineerRef]);

  return (
    <h1>
      <span className="text-left force-block full-width" ref={softwareRef}>Software</span>
      <span className="text-right force-block full-width" ref={engineerRef}>Engineer</span>
      <span className="clear" />
    </h1>
  );
}

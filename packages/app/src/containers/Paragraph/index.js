import React, { createRef, useEffect } from 'react';
import gsap from 'gsap';

// eslint-disable-next-line react/prop-types
export default function Paragraph({ children }) {
  const textRef = createRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0.8,
      scaleX: 0.9,
      scaleY: 0.9,
      duration: 1.2,
      scrollTrigger: {
        trigger: textRef.current,
        toggleActions: 'play reverse play reverse',
        start: 'bottom bottom',
        end: 'top top',
      },
    });
  }, [textRef]);

  return (
    <p className="center-section text-center" ref={textRef}>
      {children}
    </p>
  );
}

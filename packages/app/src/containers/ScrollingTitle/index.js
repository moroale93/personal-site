import React, { createRef, useEffect } from 'react';
import gsap from 'gsap';

// eslint-disable-next-line react/prop-types
export default function ScrollingTitle({ children, className }) {
  const titleRef = createRef();

  useEffect(() => {
    gsap.to(titleRef.current, {
      xPercent: -50,
      scrollTrigger: {
        trigger: titleRef.current,
        toggleActions: 'play reverse play reverse',
        start: 'bottom bottom',
        end: 'top top',
        scrub: true,
      },
    });
  }, [titleRef]);

  return (
    <h2 ref={titleRef} className={className}>
      {children}
    </h2>
  );
}

/* eslint-disable react/prop-types */
import gsap from 'gsap';
import React, { createRef, useEffect } from 'react';

import './index.scss';

export default function Divider() {
  const lineRef = createRef();

  useEffect(() => {
    gsap.to(lineRef.current, {
      width: '100%',
      duration: 1.5,
      scrollTrigger: {
        trigger: lineRef.current.parentElement,
        toggleActions: 'play reverse play reverse',
        start: 'center bottom',
      },
    });
  }, [lineRef]);

  return (
    <div ref={lineRef} className="horizontal-line" />
  );
}

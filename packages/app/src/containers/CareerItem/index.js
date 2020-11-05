/* eslint-disable react/prop-types */
import gsap from 'gsap';
import React, { createRef, useEffect } from 'react';

import Divider from '../Divider';
import './index.scss';

export default function Career({
  index,
  title,
  link,
  role,
  location,
  image,
}) {
  const titleRef = createRef();
  const indexRef = createRef();
  const locationRef = createRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      yPercent: -30,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: titleRef.current.parentElement,
        toggleActions: 'play reverse play reverse',
        start: 'center bottom',
      },
    });

    gsap.from(indexRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: indexRef.current.parentElement,
        toggleActions: 'play reverse play reverse',
        start: 'center bottom',
      },
    });

    gsap.from(locationRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: locationRef.current.parentElement,
        toggleActions: 'play reverse play reverse',
        start: 'center bottom',
      },
    });
  }, [titleRef, indexRef, locationRef]);

  return (
    <>
      <Divider />
      <div className="career-item">
        <h3 ref={titleRef}><a className="reverse" href={link} alt={`${title} website`}>{title}</a></h3>
        <br />
        <p ref={locationRef}>{`${role} - ${location}`}</p>
        <span ref={indexRef} className="index">{`0${index}`}</span>
        <img src={image} alt={`${title} logo`} />
      </div>
    </>
  );
}

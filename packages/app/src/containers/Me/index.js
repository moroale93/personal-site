import React, { createRef, useEffect } from 'react';
import gsap from 'gsap';

import Paragraph from '../Paragraph';
import me from '../../images/me.png';
import { useLanguage } from '../../contexts/languageProvider';

import './index.scss';

export default function Me() {
  const imageRef = createRef();
  const textRef = createRef();
  const [{ translations }] = useLanguage();

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      duration: 3,
      scrollTrigger: {
        trigger: imageRef.current,
        toggleActions: 'play reverse play reverse',
        start: 'center bottom',
        end: 'center top',
      },
    });

    gsap.from(textRef.current, {
      opacity: 0.8,
      scaleX: 0.9,
      scaleY: 0.9,
      duration: 1.2,
      scrollTrigger: {
        trigger: textRef.current,
        toggleActions: 'play reverse play reverse',
        start: 'center bottom',
        end: 'top top',
      },
    });
  }, [imageRef, textRef]);

  return (
    <section>
      <div className="center-section middle-image" ref={imageRef}>
        <picture className="full-width">
          <source srcSet={me} type="image/png" />
          <img src={me} alt="Alessandro Moretto portrait" className="full-width" />
        </picture>
      </div>
      <Paragraph>
        {translations.iAm}
        <br />
        {translations.workFor} <a href="https://www.usabilla.com/" alt="Usabilla link" target="_blank">Usabilla</a> by <a href="https://www.surveymonkey.com/" alt="Survey Monkey link" target="_blank">SurveyMonkey</a>.
        <br />
        {translations.passions}
      </Paragraph>
    </section>
  );
}

import React, { createRef, useEffect } from 'react';
import gsap from 'gsap';

import ScrollingTitle from '../ScrollingTitle';
import Paragraph from '../Paragraph';
import { useLanguage } from '../../contexts/languageProvider';

export default function Collaboration() {
  const textRef = createRef();
  const [{ translations }] = useLanguage();

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
    <section>
      <ScrollingTitle>
        {translations.needHelp}
      </ScrollingTitle>
      <Paragraph>
        {translations.q1}
        <br />
        {translations.q2}
        <br />
        {translations.q3}
        <br />
        {translations.contact}
      </Paragraph>
      <h2 className="text-center small">
        <a href="mailto:alessandro.moretto.developer@gmail.com">alessandro.moretto.developer@gmail.com</a>
      </h2>
    </section>
  );
}

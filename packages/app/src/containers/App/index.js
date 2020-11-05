import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Job from '../Job';
import Menu from '../Menu';
import Me from '../Me';
import Career from '../Career';
import Collaboration from '../Collaboration';
import LanguageProvider from '../../contexts/languageProvider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

export default function App() {
  return (
    <LanguageProvider>
      <Menu />
      <Job />
      <Me />
      <Career />
      <Collaboration />
    </LanguageProvider>
  );
}

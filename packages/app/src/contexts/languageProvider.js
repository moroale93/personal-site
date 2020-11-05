import React, { createContext, useContext, useState } from 'react';

export const LANGUAGES = {
  ITALIAN: 'IT',
  ENGLISH: 'EN',
};
const translations = {
  [LANGUAGES.ENGLISH]: {
    iAm: 'I am Alessandro Moretto, a Software Engineer based in Italy.',
    workFor: 'I work remotly for',
    passions: 'I have a fondness for building web applications, client-server architectures and modern technologies.',
    carrer: 'Career • What I\'ve done?',
    university: 'University of Padua',
    padua: 'Padua (Italy)',
    amsterdam: 'Amsterdam (Netherland)',
    remote: 'Remote from Italy',
    student: 'Student',
    mobileDeveloper: 'Mobile Developer',
    needHelp: 'Need help? • I\'m here!',
    q1: 'Do you want to know more about software engineering?',
    q2: 'Do you have an idea to develop?',
    q3: 'Do you need an help on your project?',
    contact: 'Feel free to contact me!',
  },
  [LANGUAGES.ITALIAN]: {
    iAm: 'Sono Alessandro Moretto, un Software Engineer con sede in Italy.',
    workFor: 'Lavoro in remoto per',
    passions: 'Mi piace costruire applicazioni web con architetture client-server utilizzando tecnologie moderne.',
    carrer: 'Cariera • Cosa ho fatto?',
    university: 'Università di Padova',
    padua: 'Padova (Italia)',
    amsterdam: 'Amsterdam (Olanda)',
    remote: 'Remoto dall\'Italia',
    student: 'Studente',
    mobileDeveloper: 'Sviluppatore Software',
    needHelp: 'Serve aiuto? • Sono qui!',
    q1: 'Vuoi saperne di piu sull\ingegneria del software?',
    q2: 'Hai un\'idea da sviluppare?',
    q3: 'Ti serve un aiuto su un progetto?',
    contact: 'Contattami!',
  },
};

const LanguageContext = createContext([{
  lang: LANGUAGES.ITALIAN,
  translations: translations[LANGUAGES.ITALIAN],
}, () => {}]);

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}

// eslint-disable-next-line react/prop-types
export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(LANGUAGES.ITALIAN);
  return (
    <LanguageContext.Provider value={[{
      lang: language,
      translations: translations[language],
    }, setLanguage]}
    >
      {children}
    </LanguageContext.Provider>
  );
}

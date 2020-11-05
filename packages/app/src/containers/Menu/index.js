import React from 'react';
import { useLanguage, LANGUAGES } from '../../contexts/languageProvider';

import './index.scss';

export default function Menu() {
  const [{
    language,
  }, setLanguage] = useLanguage();

  return (
    <nav>
      <ul>
        <li className="brand">
          <span>Alessandro</span>
          <span>Moretto</span>
        </li>
        {Object.values(LANGUAGES).map(lang => (
          <li key={lang}>
            <button
              type="button"
              onClick={() => setLanguage(lang)}
              className={lang === language ? 'active' : ''}
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

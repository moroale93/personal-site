import React from 'react';

import ScrollingTitle from '../ScrollingTitle';
import CareerItem from '../CareerItem';
import unipd from '../../images/unipd.png';
import entelligo from '../../images/entelligo.png';
import wintech from '../../images/wintech.png';
import usabilla from '../../images/usabilla.png';
import { useLanguage } from '../../contexts/languageProvider';

import './index.scss';
import Divider from '../Divider';

const JOBS = translations => [{
  index: 1,
  title: translations.university,
  from: new Date(2012, 10, 1),
  link: 'https://www.unipd.it/',
  role: translations.student,
  location: translations.padua,
  image: unipd,
}, {
  index: 2,
  title: 'Entelligo',
  from: new Date(2015, 7, 1),
  link: 'https://www.rockstart.com/startups/entelligo-2/',
  role: translations.mobileDeveloper,
  location: translations.amsterdam,
  image: entelligo,
}, {
  index: 3,
  title: 'Wintech',
  from: new Date(2016, 1, 1),
  link: 'https://www.wintech.it/',
  role: 'Software Engineer',
  location: translations.padua,
  image: wintech,
}, {
  index: 4,
  title: 'Usabilla',
  from: new Date(2019, 6, 1),
  link: 'https://usabilla.com/',
  role: 'Software Engineer (Frontend)',
  location: translations.remote,
  image: usabilla,
}];

export default function Career() {
  const [{ translations }] = useLanguage();

  return (
    <section>
      <ScrollingTitle>
        {translations.carrer}
      </ScrollingTitle>
      <ol>
        {JOBS(translations).map(({
          title,
          from,
          link,
          role,
          location,
          image,
          index,
        }) => (
          <li key={index}>
            <CareerItem
              index={index}
              title={title}
              from={from}
              link={link}
              role={role}
              location={location}
              image={image}
            />
            {JOBS.length === index && <Divider />}
          </li>
        ))}
      </ol>
    </section>
  );
}

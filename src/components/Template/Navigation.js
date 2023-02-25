import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import i18n from '../../i18n';

import Hamburger from './Hamburger';
import { routes, routesBr } from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  const r = language === 'pt' ? routesBr : routes;

  return (
    <header id="header">
      <h1 className="index-link">
        {r.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {r.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;

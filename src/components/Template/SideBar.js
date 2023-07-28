import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import i18n from '../../i18n';

import ContactIcons from '../Contact/ContactIcons';
import LanguageSelector from '../LanguageSelector';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  return (
    <section id="sidebar">
      <section id="intro">
        <header>
          <h2><Link to="/" className="logo">Lucas S. Nogueira</Link></h2>
          <p><a href="mailto:lucas.sn@protonmail.com">lucas.sn@protonmail.com</a></p>
        </header>
        <LanguageSelector />
      </section>

      <section className="blurb">
        <h2>
          <Trans i18nKey="sideBar.about">
            About
          </Trans>
        </h2>
        <p>
          <Trans i18nKey="sideBar.presentation">
            Hi, I&apos;m Lucas. Automation and web developer.
            Actually I am a <a href="https://www.unisinos.br/">Unisinos</a> B.Sc. in Information Systems student, and
            work at <a href="https://srconsulting.io/">SR Consulting</a> a <a href="https://www.salesforce.com/">Salesforce</a> consulting company.
          </Trans>
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button"><Trans i18nKey="sideBar.learnMore">Learn More</Trans></Link> : <Link to="/about" className="button"><Trans i18nKey="sideBar.aboutMe">About Me</Trans></Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Lucas S. Nogueira <Link to="/">mysite.com</Link>.</p>
        <p className="copyright">Site based on <a href="https://github.com/mldangelo/personal-site">mldangelo project</a>.</p>
      </section>
    </section>
  );
};

export default SideBar;

import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Profile" />
      </Link>
      <header>
        <h2>Lucas S. Nogueira</h2>
        <p><a href="lucas.sn@protonmail.com">lucas.sn@protonmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Lucas. Automation and web developer.
        Actually I am a <a href="https://www.unisinos.br/">Unisinos</a> B.Sc. in Information Systems student, and
        work at <a href="https://srconsulting.io/">SR Consulting</a> a <a href="https://www.salesforce.com/">Salesforce</a> consulting company.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
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

export default SideBar;

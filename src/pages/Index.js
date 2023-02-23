import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';

const Index = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);

  return (
    <Main
      description="Lucas Nogueira's personal website. Brazil based B.Sc. in Information Systems."
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/">Portfolio</Link></h2>
            <p><Trans i18nKey="index.aboutMe">Automation and web developer.</Trans></p>
          </div>
        </header>
        <p>
          <Trans i18nKey="index.presentation">
            Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            view <Link to="/stats">site statistics</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
          </Trans>
        </p>
      </article>
    </Main>
  );
};

export default Index;

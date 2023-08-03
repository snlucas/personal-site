import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';

const md = raw('../data/about.md');

const count = md.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  const markdown = language === 'pt' ? raw('../data/sobre.md') : raw('../data/about.md');

  return (
    <Main
      title="About"
      description="Learn about Lucas Nogueira"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about"><Trans i18nKey="about.aboutMe">About Me</Trans></Link></h2>
            <p><Trans i18nKey="about.countWords" count={count}>(in about {{ count }} words)</Trans></p>
          </div>
        </header>
        <ReactMarkdown
          source={markdown}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
      </article>
    </Main>
  );
};

export default About;

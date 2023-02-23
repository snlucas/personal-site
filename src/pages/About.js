import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  const { t } = useTranslation();

  return (
    <Main
      title={t('about.title')}
      description={t('about.description')}
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about">{t('about.aboutMe')}</Link></h2>
            <p>({t('about.countWords', { count })})</p>
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

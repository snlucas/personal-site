import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  const { t } = useTranslation();

  return (
    <Main
      title={t('stats.title')}
      description={t('stats.description')}
    >
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/stats">{t('stats.linkToStats')}</Link></h2>
          </div>
        </header>
        <Personal />
        <Site />
      </article>
    </Main>
  );
};

export default Stats;

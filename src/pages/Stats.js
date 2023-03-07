import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Stats = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);

  return (
    <Main
      title="Stats"
      description="Some statistics about Lucas Nogueira and snlucas.com"
    >
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/stats"><Trans i18nKey="stats.stats">Stats</Trans></Link></h2>
          </div>
        </header>
        <Personal />
        {/* <Site /> */}
      </article>
    </Main>
  );
};

export default Stats;

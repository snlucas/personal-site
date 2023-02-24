import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useSelector } from 'react-redux';
import i18n from '../i18n';

const PageNotFound = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);

  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet title="404 Not Found">
          <meta name="description" content="The content you are looking for cannot be found." />
        </Helmet>
        <h1 data-testid="heading">
          <Trans i18nKey="notFound.head">
            Page Not Found
          </Trans>
        </h1>
        <p>
          <Trans i18nKey="notFound.return">
            Return <Link to="/">home</Link>.
          </Trans>
        </p>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;

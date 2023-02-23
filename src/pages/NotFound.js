import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useSelector } from 'react-redux';
import i18n from '../i18n';

const PageNotFound = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet title="404 Not Found">
          <meta name="description" content={t('notFound.description')} />
        </Helmet>
        <h1 data-testid="heading">{t('notFound.page')}</h1>
        <p>{t('notFound.return')} <Link to="/">{t('notFound.home')}</Link>.</p>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;

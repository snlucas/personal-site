import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  const { t } = useTranslation();

  return (
    <Main
      title={t('contact.title')}
      description={t('contact.description')}
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact">{t('contact.contact')}</Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p>{t('getInTouch')}</p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;

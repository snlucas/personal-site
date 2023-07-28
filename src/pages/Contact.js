import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);

  return (
    <Main
      title="Contact"
      description="Contact Lucas Nogueira via email @ lucas.sn@protonmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact"><Trans i18nKey="contact.contact">Contact</Trans></Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p><Trans i18nKey="contact.getInTouch">Feel free to get in touch. You can email me at: </Trans></p>
          lucas.sn@protonmail.com
          <br/>
          lucas.lambda.101@gmail.com
          <p><Trans i18nKey="contact.linkBelow">Or just click in the link below.</Trans></p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;

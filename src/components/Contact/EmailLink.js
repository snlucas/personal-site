import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import i18n from '../../i18n';

const EmailLink = ({ loopMessage }) => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);

  // Validates the first half of an email address.
  const validateText = (text) => {
    // NOTE: Passes RFC 5322 but not tested on google's standard.
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text) || text.length === 0;
  };

  const messages = language === 'pt'
    ? [
      'oi',
      'olá',
      'e_aí?',
      'você-pode-me-mandar-um-email-sobre-qualquer-coisa!_Sério',
      'na_verdade_não_qualquer_coisa._Mas_quase_tudo',
      'como_isso_🚢',
      'ou_isso_🛸',
      'mas_não_isso_😞',
      'você.também.pode.me.enviar.um.email.sobre.alguma.coisa.específica.como',
      'só-passando-por-aqui_👽',
      'vem-trabalhar-aqui-por-favorsinho_💰',
      'curti_👍',
      '🌟🌟🌟🌟🌟',
      'obrigado',
    ]
    : [
      'hi',
      'hello',
      'hola',
      'you-can-email-me-at-literally-anything._Really',
      'well_not_anything._But_most_things',
      'like-this_🚢',
      'or-this_🛸',
      'but_not_this_😞',
      'you.can.also.email.me.with.specific.topics.like',
      'just-saying-hi_👽',
      'please-work-for-us_💰',
      'help',
      'admin',
      'or-I-really-like-your-website',
      'thanks',
    ];

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      if (delay) {
        const id = setInterval(() => {
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }
      return () => { }; // pass linter
    }, [delay]);
  };

  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      if (loopMessage) {
        updateIter(0);
        updateChar(0);
      } else {
        setIsActive(false);
      }
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      {/* <a href={validateText(message) ? `mailto:${message}@protonmail.com` : ''}> */}
      <a href="mailto:lucas.sn@protonmail.com">
        <span>{message}</span>
        <span>@snlucas.com</span>
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;

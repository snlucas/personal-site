import React from 'react';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import Table from './Table';
import { data, dataBr } from '../../data/stats/personal';
import i18n from '../../i18n';

const PersonalStats = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);

  const personalData = language === 'pt' ? dataBr : data;

  return (
    <>
      <h3><Trans i18nKey="personal.statsAbout">Some stats about me</Trans></h3>
      <Table data={personalData} />
    </>
  );
};

export default PersonalStats;

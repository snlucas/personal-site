import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);
  const { t } = useTranslation();

  return (
    <Main
      title={t('projects;title')}
      description={t('projects.description')}
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/projects">{t('projects.projects')}</Link></h2>
            <p>{t('projects.aboutPage')}</p>
          </div>
        </header>
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </article>
    </Main>
  );
};

export default Projects;

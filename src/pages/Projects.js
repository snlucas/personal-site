import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import i18n from '../i18n';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => {
  const language = useSelector((state) => state.language.value);
  i18n.changeLanguage(language);

  return (
    <Main
      title="Projects"
      description="Learn about Lucas's projects."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/projects"><Trans i18nKey="projects.projects">Projects</Trans></Link></h2>
            <p><Trans i18nKey="projects.desc">A selection of some of mine projects.</Trans></p>
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

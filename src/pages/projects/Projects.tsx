import React, { useState, useMemo } from "react";

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Input from "../../components/input/Input";

import './Projects.scss';

import projects from "../../assets/data/projects";
import ProjectCard from "../../components/cards/projectCard/ProjectCard";

const Projects = () => {
  const [searchProjectText, setSearchProjectText] = useState("");

  const changeHandleSearchProjectText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchProjectText(e.target.value)
  }

  const filteredProjects = useMemo(() => {
    return projects?.filter(project => project.name.toLowerCase().includes(searchProjectText));
  }, [projects, searchProjectText])

  return (
    <section className="projects-page">
      <div className="container">
        <div className="projects-page__header">
          <h2>My projects</h2>
          <p>some of my recent works</p>
        </div>
        <div className="projects-page__search">
          <Input
            value={searchProjectText}
            onChangeHandle={changeHandleSearchProjectText}
            placeholder="search project"
          />
        </div>
      </div>
      <TransitionGroup className="projects-page__wrapper">
        {filteredProjects.map(project => {
          return (
            <CSSTransition
              key={project.id}
              timeout={300}
              classNames="project-item"
            >
              <ProjectCard
                id={project.id}
                name={project.name}
                title={project.title}
                type={project.type}
                image={project.img}
              />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </section>
  )
}

export default Projects;

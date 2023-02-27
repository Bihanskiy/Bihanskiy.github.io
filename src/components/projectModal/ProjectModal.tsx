import React, { FC, useMemo } from "react";

import './ProjectModal.scss';

import projects from "../../assets/data/projects";
import RoundedButton from "../buttons/roundedButton/RoundedButton";

interface ProjectModalPropsType {
  id: string | number;
}

const ProjectModal: FC<ProjectModalPropsType> = ({ id }) => {

  const project = useMemo(() => projects.filter(project => project.id === id)[0], [id])

  return (
    <div className="project">
      <div className="project__image">
        <img
          src={project.projectImg}
          alt={project.title}
          className="image"
        />
      </div>
      <div className="project__description description">
        <div className="description__text">
          {project.description}
        </div>
        <div className="description__tools tools">
          <div className="tools__box">
            <span className="tools__title">
              Technologies:
            </span>
            <span className="tools__subtitle">
              {project.technologies}
            </span>
          </div>
          <div className="tools__box">
            <span className="tools__title">
              Tools:
            </span>
            <span className="tools__subtitle">
              {project.tools}
            </span>
          </div>
          {project.source &&
            <div className="tools__box">
              <span className="tools__title">
                Source:
              </span>
              <span className="tools__subtitle">
                {project.source}
              </span>
            </div>
          }
        </div>
      </div>
      {project.url &&
        <div className="project__actions">
          <a
            href={project.url}
            target="_blank"
          >
            <RoundedButton
              name="Visit"
            />
          </a>
        </div>
      }
    </div>
  )
}

export default ProjectModal; 
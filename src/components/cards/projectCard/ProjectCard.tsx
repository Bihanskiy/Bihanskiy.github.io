import React, { FC } from "react";

import './ProjectCard.scss';

import { RiArrowRightLine } from "react-icons/ri";

interface ProjectsMapType {
  [key: string]: string;
}

const projectsMap: ProjectsMapType = {
  RatingPro: "RatingPro-card",
  YouFine: "YouFine-card",
  Chat: "Chat-card",
  CurrencyConverter: "CurrencyConverter-card",
  MarvelService: "MarvelService-card",
  USShip: "USShip-card",
  EDA: "EDA-card",
  ToDoList: "ToDoList-card",
  Furniture: "Furniture-card",
}

interface ProjectCardProps {
  name: string;
  title: string;
  type: string;
  image: string;
}


const ProjectCard: FC<ProjectCardProps> = ({ name, title, type, image }) => {
  return (
    <div className={"projects-item"+ " " + projectsMap[name]}>
      <a className="projects-item__action">
        <div className="c-wrapper"></div>
        <div className="main-img">
          <img
            src={image}
            alt="RatingPro project image"
            className="main-img__item"
          />
        </div>
        <div className="overlay">
          <div className="overlay-text">
            <span className="project-subtitle">{type}</span>
            <div className="project-title">{title}</div>
          </div>
          <div className="project-more">
            <span className="project-more__text">see project</span>
            <RiArrowRightLine style={{ fontSize: "22px" }} />
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard;
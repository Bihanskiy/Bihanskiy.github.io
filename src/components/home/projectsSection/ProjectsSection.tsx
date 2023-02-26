import React from "react";

import './ProjectsSection.scss';

import { RiArrowRightLine } from "react-icons/ri";
import RatingPro from '../../../assets/images/projects/ratingPro.png';


const ProjectsSection = () => {

  return (
    <section className="projects">
      <div className="projects__header header-projects">
        <p className="header-projects__subtitle">some of my recent works</p>
        <h2 className="header-projects__title">Projects</h2>
      </div>
      <div className="projects-wrapper">
        <div className="projects-item">
          <a className="projects-item__action">
            <div className="c-wrapper"></div>
            <div className="main-img">
              <img
                src={RatingPro}
                alt="RatingPro project image"
                className="main-img__item"
              />
            </div>
            <div className="overlay">
              <div className="overlay-text">
                <span className="project-subtitle">Freelancing platform</span>
                <div className="project-title">Rating Pro</div>
              </div>
              <div className="project-more">
                <span className="project-more__text">see project</span>
                <RiArrowRightLine style={{ fontSize: "22px" }} />
              </div>
            </div>
          </a>
        </div>
        <div className="projects-item">
          <a className="projects-item__action">
            <span className="c-wrapper__more">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="overlay__more">
              <span className="overlay-more__text-more">see all projects</span>
              <RiArrowRightLine style={{ fontSize: "25px" }} />
            </span>
          </a>
        </div>
        <div className="projects-item">

        </div>
        <div className="projects-item">

        </div>
        <div className="projects-item">

        </div>
        <div className="projects-item">

        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;

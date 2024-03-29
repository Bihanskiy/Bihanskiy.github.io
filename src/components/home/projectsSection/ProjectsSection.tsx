import React from "react";

import './ProjectsSection.scss';

import { RiArrowRightLine } from "react-icons/ri";
import ProjectCard from "../../cards/projectCard/ProjectCard";

import projects from "../../../assets/data/projects";
import { useCustomNavigate } from "../../../hooks";

const ProjectsSection = () => {
  const navigate = useCustomNavigate();


  return (
    <section className="projects">
      <div className="projects__header header-projects">
        <p className="header-projects__subtitle">some of my recent works</p>
        <h2 className="header-projects__title">Projects</h2>
      </div>
      <div className="projects-wrapper">
        {projects.map((project, index) => {
          if (index < 5) {
            return (
              <React.Fragment key={project.id}>
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  title={project.title}
                  type={project.type}
                  image={project.img}
                />
              </React.Fragment>
            )
          }

          return null;
        })}

        <div className="projects-item">
          <a
            className="projects-item__action"
            onClick={() => navigate("/projects")}
          >
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
      </div>
    </section>
  )
}

export default ProjectsSection;

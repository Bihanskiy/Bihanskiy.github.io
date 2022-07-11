import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/MarvelService.PNG';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    border: 1px solid var(--deep-dark);
    transition: 0.5s ease opacity;
    cursor: pointer;
    :hover{
      opacity: 0.5;
    }
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  setActive,
  setProjectId,
  id
}) {

  return (
    <>
      <ProjectItemStyles>
        <a
          className="projectItem__img"
          onClick={
            () => {
              setActive(true);
              setProjectId(id);
            }
          }
        >
          <img src={img} alt="project img" />
        </a>
        <div className="projectItem__info">
          <a>
            <h3 className="projectItem__title">{title}</h3>
          </a>
        </div>
      </ProjectItemStyles>
    </>
  );
}

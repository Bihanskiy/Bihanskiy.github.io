import React from 'react';
import styled from 'styled-components';

import pdf from '../assets/files/CV.pdf'

import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-sec-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__link {
    font-size: 3rem;
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__link {
      font-size: 2.8rem;
    }
  }
`;
const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Bohdan Bihanskyi</span>
              </p>
              <h2 className="about__heading">A junior Front-End Developer</h2>
              <div className="about__info">
                <PText>
                  ... I'm able to work efficiently both individually and in a team. Due to my ingenuity and strong analytical thinking I can find simple solutions to complex problems. I am an “eternal student” so can learn new things easily. I am eager to be a highly qualified specialist and always improve my skills... To find more information <Emoji label="cool" symbol="👇" /><Emoji label="cool" symbol="😎" />
                </PText>
              </div>
              <a href={pdf} target="_blank" className='about__link'><strong>Download CV</strong></a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Varsity"
                items={['Igor Sikorsky Kyiv Polytechnic Institute']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Technologies"
                items={['HTML', 'CSS', 'SASS/SCSS', 'React', 'Redux', 'JSON', 'AJAX', 'API',]}
              />
              <AboutInfoItem
                title="Tools"
                items={['Webpack', 'Gulp', 'Git', 'npm', 'Photoshop', 'Figma', 'DevTools']}
              />
              <AboutInfoItem
                title="Languages"
                items={['JavaScript']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}

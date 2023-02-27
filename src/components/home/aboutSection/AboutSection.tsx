import React from "react";

import AboutImg from '../../../assets/images/about-sec-img.png';
import RoundedButton from "../../buttons/roundedButton/RoundedButton";

import './AboutSection.scss';

import { useCustomNavigate } from "../../../hooks";


const AboutSection = () => {
  const navigate = useCustomNavigate();

  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__story story">
          <div className="storyt__header header-story">
            <p className="header-story__subtitle">
              Let me introduce myself
            </p>
            <h2 className="header-story__title">
              About me
            </h2>
          </div>
          <div className="story__text">
            <p>
              I am a Front-end Developer. I'm keen on creating web interfaces and their developing. To find additional information about me and my education click through to my
            </p>
          </div>
          <div className="story__actions actions">
            <div className="actions__works">
              <RoundedButton
                name="Works"
                handleClick={() => navigate("/projects")}
              />
            </div>
            <div className="actions__more">
              <RoundedButton
                name="Read more"
                handleClick={() => navigate("/about")}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="about__photo photo-wrapper">
          <img
            src={AboutImg}
            alt="Photo"
            className="photo"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
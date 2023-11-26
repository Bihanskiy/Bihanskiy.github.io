import React from "react";

import './About.scss';

import AboutImg from '../../assets/images/about-sec-img.png';

import RoundedButton from "../../components/buttons/roundedButton/RoundedButton";
import Table from "../../components/table/Table";

const achievements = [
  {
    tableName: "Education",
    rows: [
      {
        rowName: "Varsity",
        rowContent: ["Igor Sikorsky Kyiv Polytechnic Institute"],
      }
    ]
  },
  {
    tableName: "My skills",
    rows: [
      {
        rowName: "Technologies",
        rowContent: ["HTML", "CSS", "SASS/SCSS", "React", "Redux", "Next", "NodeJS(beginner)", "JSON", "AJAX", "API", "React Query", "Storybook", "Formik", "React Transition Group", "Framer Motion"],
      },
      {
        rowName: "Tools",
        rowContent: ["Webpack", "Gulp", "Git", "npm", "Photoshop", "Figma", "DevTools",],
      },
      {
        rowName: "TaskTrackers",
        rowContent: ["JIRA", "Trello"],
      },
      {
        rowName: "CSS methodologies",
        rowContent: ["BEM"],
      },
      {
        rowName: "UI frameworks",
        rowContent: ["Bootstrap", "Material"],
      },
      {
        rowName: "Languages",
        rowContent: ["JavaScript", "TypeScript"],
      },
    ]
  },
]

const About = () => {

  return (
    <section className="about-page">
      <div className="container">
        <div className="about-page__container">
          <div className="about-page__story story">
            <div className="storyt__header header-story">
              <div className="header-story__subtitle">
                Hi, I am <span>Bohdan Bihanskyi</span>
              </div>
              <h2 className="header-story__title">
                A Front-end Developer
              </h2>
            </div>
            <div className="story__text">
              <p>
                ... I'm able to work efficiently both individually and in a team. Due to my ingenuity and strong analytical thinking I can find simple solutions to complex problems. I am an “eternal student” so can learn new things easily. I am eager to be a highly qualified specialist and always improve my skills... To find more information
              </p>
            </div>
            <div className="story__actions actions">
              <div className="actions__works">
                <a href={"../CV.pdf"} rel="noopener noreferrer" target="_blank">
                  <RoundedButton
                    name="View CV"
                  />
                </a>
              </div>
              <div></div>
            </div>
          </div>
          <div className="about-page__photo photo-wrapper">
            <img
              src={AboutImg}
              alt="Photo"
              className="photo"
            />
          </div>
        </div>
        <div className="about-achievements">
          {achievements.map(achievement => {
            return (
              <React.Fragment key={achievement.tableName}>
                <Table
                  tableName={achievement.tableName}
                  rows={achievement.rows}
                />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>

  )
}

export default About;

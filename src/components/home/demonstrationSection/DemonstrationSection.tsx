import React from "react";

import InteractionButton from "../../buttons/interactionButton/InteractionButton";

import './DemonstrationSection.scss';


const DemonstrationSection = () => {
  return (
    <section className="demonstration">
      <div className="container">
        <div className="demonstration__content content">
          <div className="content__header">
            <p className="content__subtitle">Hello, my name is</p>
            <h1 className="content__title">Bohdan Bihanskyi</h1>
          </div>
          <div className="content__body">
            <p className="content__profession">and I'm a Front-end Developer</p>
            <div className="content__actions">
              <InteractionButton name={"See my works"} />
            </div>
          </div>
        </div>
        <div className="demonstration__background">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div >
    </section>
  )
}

export default DemonstrationSection;
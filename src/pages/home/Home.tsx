import React from "react";

import './Home.scss';

const Home = () => {

  return (
    <section className="demonstration">
      <div className="container">
        <div className="demonstration__content content">
          <h4 className="content__hello">Hello, my name is</h4>
          <h1 className="content__name">Bohdan Bihanskyi</h1>
          <h4 className="content__profession">and I'm a Front-end Developer</h4>
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

export default Home;

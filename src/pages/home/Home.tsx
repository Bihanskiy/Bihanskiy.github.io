import React from "react";

import './Home.scss';

import AboutImg from '../../assets/images/about-sec-img.png';
import AboutSection from "../../components/home/aboutSection/AboutSection";
import InteractionButton from "../../components/buttons/interactionButton/InteractionButton";
import DemonstrationSection from "../../components/home/demonstrationSection/DemonstrationSection";
import CasesSection from "../../components/home/casesSection/CasesSection";
import ProjectsSection from "../../components/home/projectsSection/ProjectsSection";

const Home = () => {

  return (
    <>
      <DemonstrationSection />
      <AboutSection />
      <CasesSection />
      <ProjectsSection />
    </>
  )
}

export default Home;

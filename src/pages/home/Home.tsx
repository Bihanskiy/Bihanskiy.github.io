import React from "react";

import './Home.scss';

import AboutSection from "../../components/home/aboutSection/AboutSection";
import DemonstrationSection from "../../components/home/demonstrationSection/DemonstrationSection";
import CasesSection from "../../components/home/casesSection/CasesSection";
import ProjectsSection from "../../components/home/projectsSection/ProjectsSection";

const Home = () => {

  return (
    <div className="home-page">
      <DemonstrationSection />
      <AboutSection />
      <CasesSection />
      <ProjectsSection />
    </div>
  )
}

export default Home;

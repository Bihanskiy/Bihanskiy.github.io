import React from "react";

import CaseCard from "../../cards/caseCard/CaseCard";

import './CasesSection.scss';

interface casesDataType {
  id: number;
  name: string;
  image: string;
  description: string;
}

const casesData: casesDataType[] = [
  {
    id: 1,
    name: "responsive",
    image: "../responsive-design.png",
    description: "My layout fits all devices. It responses to any screen resolution; from 320px(small mobile devices) to 1920px(widescreen monitors)."
  },
  {
    id: 2,
    name: "speed",
    image: "../rocket.png",
    description: "Fast loading is my main priority. I use the most updated technics for image optimization, minimization, compression, code splitting, etc."
  },
  {
    id: 3,
    name: "code quality",
    image: "../clean-code.png",
    description: "Clean, scalable, structured, scalable and well organized are the main developing criteria of my code. For this purpose I use DRY Principle and the best practices for writing super readable code."
  },
]


const CasesSection = () => {
  return (
    <section className="cases">
      <div className="container cases__container">
        <div className="cases__header">
          <h2>Cases</h2>
        </div>
        <div className="cases__body">
          {casesData.map(caseItem => (
            <React.Fragment key={caseItem.id}>
              <CaseCard
                name={caseItem.name}
                description={caseItem.description}
                image={caseItem.image}
              />
            </React.Fragment>
          ))}
        </div>
      </div >
    </section >
  )
}

export default CasesSection;
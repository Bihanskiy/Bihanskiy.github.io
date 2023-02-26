import React, { FC } from "react";

import './CaseCard.scss';

interface CaseCardProps {
  name: string;
  description: string;
  image: string;
}

const CaseCard: FC<CaseCardProps> = ({ name, description, image }) => {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src={image} />
          <h3>{name}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CaseCard;
import React, { FC } from "react";

import './InteractionButton.scss';

import { RiArrowRightLine } from "react-icons/ri";

interface InteractionButtonProps {
  name: string;
  handleClick: () => void;
}


const InteractionButton: FC<InteractionButtonProps> = ({ name, handleClick }) => {

  return (
    <button
      className="interaction-button"
      type="button"
      onClick={handleClick}
    >
      {name}
      <i>
        <RiArrowRightLine style={{ fontSize: "20px" }} />
      </i>
    </button>
  )
}

export default InteractionButton;
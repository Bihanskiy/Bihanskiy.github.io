import React, { FC } from "react";

import './InteractionButton.scss';

import { RiArrowRightLine } from "react-icons/ri";

interface InteractionButtonProps {
  name: string;
}

const InteractionButton: FC<InteractionButtonProps> = ({ name }) => {

  return (
    <button
      className="interaction-button"
      type="button"
    >
      {name}
      <i>
        <RiArrowRightLine style={{ fontSize: "20px" }} />
      </i>
    </button>
  )
}

export default InteractionButton;
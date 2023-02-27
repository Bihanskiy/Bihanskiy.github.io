import React, { FC } from "react";

import './RoundedButton.scss';

interface RoundedButtonProps {
  name: string;
  handleClick?: () => void;
}


const RoundedButton: FC<RoundedButtonProps> = ({ name, handleClick }) => {

  return (
    <button
      className="rounded-button"
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  )
}

export default RoundedButton;
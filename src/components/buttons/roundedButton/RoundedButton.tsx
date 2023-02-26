import React, { FC } from "react";

import './RoundedButton.scss';


interface RoundedButtonProps {
  name: string;
}

const RoundedButton: FC<RoundedButtonProps> = ({ name }) => {

  return (
    <button
      className="rounded-button"
      type="button"
    >
      {name}
    </button>
  )
}

export default RoundedButton;
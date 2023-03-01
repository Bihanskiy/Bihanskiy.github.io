import React, { FC } from "react";

import './Input.scss';

interface InputProps {
  value: string | number;
  onChangeHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}


const Input: FC<InputProps> = ({ value, onChangeHandle, placeholder }) => {
  return (
    <div className="search-input">
      <div>
        <input
          value={value}
          onChange={onChangeHandle}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default Input;
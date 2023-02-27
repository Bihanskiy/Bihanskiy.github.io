import React, { FunctionComponent, useEffect } from "react";

import ReactDOM from "react-dom";

import './Modal.scss';

import { RiCloseLine } from "react-icons/ri";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <React.Fragment>
      <div
        className="backdrop"
        onClick={hide}
      />
      <div
        aria-modal
        aria-labelledby={headerText}
        tabIndex={-1}
        role="dialog"
        className="wrapper"
      >
        <div className="styled-modal">
          <div className="header">
            <div className="header__text">{headerText}</div>
            <button
              onClick={hide}
              className="close-button"
            >
              <RiCloseLine style={{ fontSize: "35px" }} />
            </button>
          </div>
          <div className="content">{modalContent}</div>
        </div>
      </div>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

import { useState, useEffect } from 'react';
import styled from 'styled-components';


const ModalStyles = styled.div`
.modal{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    z-index: 100;
}
.modal.active {
    opacity: 1;
    pointer-events: all;
}
.modal__content {
    padding: 30px 5px;
    border-radius: 12px;
    background-color: white;
    transform: scale(0.5);
    transition: 0.4s all;
    width: 50vw;
}
.modal__content.active {
    transform: scale(1);
    height: 90vh;
    overflow: auto;
}
@media only screen and (max-width: 950px) {
    .modal__content {
        width: 70vw;
    }
}
@media only screen and (max-width: 768px) {
    .modal__content {
        width: 85vw;
    }
}
`

const Modal = ({ active, setActive, children }) => {
    return (
        <ModalStyles>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </ModalStyles>
    )
}

export default Modal;
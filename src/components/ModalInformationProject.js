import React from 'react';
import styled from 'styled-components';

import PText from './PText';

import MarvelSetvice from '../assets/images/MarvelService.PNG'

const InformProject = styled.div`
    height: 100%;

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.modal-header{
flex: 0 0 auto;
}
.modal-header__img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 25px;
    img {
    height: 100%;
    }
}
.modal-info {
    flex: 1 0 auto;
}
.modal-info__content {
    font-size: 1.5rem;
    line-height: 1.3em;
    margin: 15px 0px;   
    a {
        overflow-wrap: break-word;
    }
    }   
.modal__controlls {
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
}
.modal__view {
    padding: 0.4em 1.3em;
    font-size: 2rem;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    background-color: var(--deep-dark);
    color: var(--white);
    font-weight: 500;
    letter-spacing: 2px;
    transition: 0.3s ease all;
    :hover {
    background-color: var(--white);
    color: var(--black);
    }
}
.modal__close {
    position: relative;
    width: 30px;
    height: 30px;
    margin-left: auto;
    opacity: .5;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s ease opacity;
    :before {
    transform: translateY(-50%) rotate(45deg);
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: var(--gray-1);
    }
    :after {
    transform: translateY(-50%) rotate(-45deg);
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: var(--gray-1);
    }
    :hover {
    opacity: 1;
    }
}
@media only screen and (max-width: 950px) {
    .projectItem__img {
      height: 350px;
    }
  }
`

export default function ModalInformProj({ setActive, projectItem }) {
    const projectObject = projectItem();
    const { description, img, technologies, tools, url, source } = projectObject;

    return (
        <InformProject>
            <div className="container">
                <header className='modal-header'>
                    <div className="modal-header__img">
                        <img src={img} alt="project img" />
                    </div>
                </header>
                <main className='modal-info'>
                    <PText className='modal-info__content' maxwith="800px">
                        {description}
                    </PText>
                    <div className="modal-info__content">
                        <strong>Technologies:</strong>
                        <span>{technologies}</span>
                    </div>
                    <div className="modal-info__content">
                        <strong>Tools:</strong>
                        <span>{tools}</span>
                    </div>
                    <div className="modal-info__content">
                        <strong>Source:</strong>
                        <a href={source} target="_blank">{source}</a>
                    </div>
                </main>
                <div className="modal__controlls">
                    <a href={url} target="_blank" className="modal__view">Visit</a>
                    <button type="button" aria-label="close popup" title="close" className="modal__close" onClick={() => setActive(false)}></button>
                </div>
            </div>
        </InformProject>
    )
}
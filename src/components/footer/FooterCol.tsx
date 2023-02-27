import React, { FC } from "react";

import { NavLink } from 'react-router-dom';

import './Footer.scss';

interface INavLink {
  type: string;
  path: string;
  text: string;
}

interface FooterColPropsType {
  heading: string;
  links: INavLink[];
}


const FooterCol: FC<FooterColPropsType> = ({ heading, links }) => {
  return (
    <div>
      <h6 className="footer__title">{heading}</h6>
      <ul className="footer__list">
        {links.map((link) => {
          return (
            <li key={link.path} className="footer__list-item">
              {link.type === "Link" ?
                <NavLink
                  exact
                  className="footer__list-link"
                  to={link.path}
                >
                  {link.text}
                </NavLink>
                :
                <a href={link.path} target="_blank">
                  {link.text}
                </a>
              }
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}

export default FooterCol;
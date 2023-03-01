import React, { createRef } from "react";

import { NavLink } from 'react-router-dom';

import './Header.scss';

import FlagUkraine from '../../assets/images/flag-ukraine.jpg';

interface INavLink {
  path: string;
  text: string;
}

const navigation: INavLink[] = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Projects',
    path: '/projects',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const burgerRef = createRef<HTMLDivElement>();
  const navRef = createRef<HTMLDivElement>();

  const handleBurgerClick = () => {
    if (burgerRef.current && navRef.current) {
      burgerRef.current.classList.toggle("clicked");
      navRef.current.classList.toggle("show");

      navRef.current.classList.contains("show")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    }
  }

  return (
    <header className="header">
      <div className="container header__container">
        <div className="flag">
          <img className="flag__img" src={FlagUkraine} alt="Flag of Ukraine" />
        </div>
        <div className="header__nav">
          <nav className="nav">
            <ul className="nav__list">
              {navigation.map((link) => (
                <li key={link.path} className="nav__item">
                  <NavLink
                    exact
                    className={isActive =>
                      "nav__link" + (isActive ? " is-active" : "")
                    }
                    to={link.path}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div
            ref={burgerRef}
            className="burger"
            onClick={handleBurgerClick}
          >
            <span></span>
          </div>
          <nav
            ref={navRef}
            className="burger-nav"
          >
            <ul className="burger-nav__list">
              {navigation.map((link) => (
                <li key={link.path} className="burger-nav__item">
                  <NavLink
                    exact
                    className={isActive =>
                      "burger-nav__link" + (isActive ? " burger-nav__is-active" : "")
                    }
                    to={link.path}
                    onClick={handleBurgerClick}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;

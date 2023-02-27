import React from "react";

import { NavLink } from 'react-router-dom';

import './Footer.scss';

import FooterCol from "./FooterCol";


interface INavLink {
  type: string;
  path: string;
  text: string;
}

const navigation: INavLink[] = [
  {
    type: 'Link',
    text: 'Home',
    path: '/',
  },
  {
    type: 'Link',
    text: 'About',
    path: '/about',
  },
  {
    type: 'Link',
    text: 'Projects',
    path: '/projects',
  },
  {
    type: 'Link',
    text: 'Contact',
    path: '/contact',
  },
];

const contacts = [
  {
    type: 'contact',
    text: '+380730062307',
    path: 'tel:+380730062307',
  },
  {
    type: 'contact',
    text: 'bohdan.bihanskiy@gmail.com',
    path: 'mailto:bohdan.bihanskiy@gmail.com',
  },
  {
    type: 'contact',
    text: 'Ukraine, Kyiv',
    path: 'https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.459407,30.4313858,10.96z/data=!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234',
  },
]

const socialLinks = [
  {
    type: 'social',
    text: 'Facebook',
    path: 'https://www.facebook.com/biganskyi',
  },
  {
    type: 'social',
    text: 'Telegram',
    path: 'https://t.me/Bihanskiy/',
  },
  {
    type: 'social',
    text: 'Instagram',
    path: 'https://www.instagram.com/_bihanskiy_/',
  },
  {
    type: 'social',
    text: 'LinkedIn',
    path: 'https://www.linkedin.com/in/bihanskyi/',
  },
]

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <FooterCol
            heading="Important Links"
            links={navigation}
          />
          <FooterCol
            heading="Contact Info"
            links={contacts}
          />
          <FooterCol
            heading="Social Links"
            links={socialLinks}
          />
        </div>
        <div className="footer__bottom">
          <p className="copyright">&copy;2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

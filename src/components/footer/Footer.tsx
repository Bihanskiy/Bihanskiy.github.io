import React from "react";

import { contacts, socialLinks } from "../../assets/data/contactsData";

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

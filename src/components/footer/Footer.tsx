import React from "react";

import './Footer.scss';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div>
            <h6 className="footer__title">Important Links</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="" className="footer__list-link">Home</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">About</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">Projects</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer__title">Contact Info</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="" className="footer__list-link">+380730062307</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">bohdan.bihanskiy@gmail.com</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">Ukraine, Kyiv</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer__title">Social Links</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="" className="footer__list-link">Facebook</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">Telegram</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">Instagram</a>
              </li>
              <li className="footer__list-item">
                <a href="" className="footer__list-link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="copyright">&copy;2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

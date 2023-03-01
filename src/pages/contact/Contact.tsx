import React from "react";

import './Contact.scss';

import { contacts, socialLinks } from "../../assets/data/contactsData";

interface SocialClassNameMapType {
  [key: string]: string;
}

const socialClassNameMap: SocialClassNameMapType = {
  Facebook: "social-button--facebook",
  Telegram: "social-button--telegram",
  Instagram: "social-button--instagram",
  LinkedIn: "social-button--linkedin",
  GitHub: "social-button--github",
}


const Contact = () => {

  return (
    <section className="contact-page">
      <div className="container">
        <div className="social-buttons">
          {socialLinks.map(socialLink => {
            return (
              <a
                key={socialLink.text}
                href={socialLink.path}
                target="_blank"
                className={`social-button ${socialClassNameMap[socialLink.text]}`}
                aria-label={socialLink.text}
              >
                {socialLink.icon}
              </a>
            )
          })}
        </div>
        <div className="contacts">
          {contacts.map(contact => {
            return (
              <div
                key={contact.name}
                className="contacts__box"
              >
                <h6>
                  {contact.name}
                </h6>
                <p>
                  {contact.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact;

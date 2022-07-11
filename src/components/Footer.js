import React from 'react';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';

import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 0 1 33.333%;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  .copyright__heart {
    text-align: center;
    svg {
      width: 1.5em;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+380730062307',
                path: 'tel:+380730062307',
              },
              {
                title: 'bohdan.bihanskiy@gmail.com',
                path: 'mailto:bohdan.bihanskiy@gmail.com',
              },
              {
                title: 'Ukraine, Kyiv',
                path: 'https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.459407,30.4313858,10.96z/data=!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/biganskyi',
              },
              {
                title: 'Telegram',
                path: 'https://t.me/Bihanskiy/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/_bihanskiy_/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText maxwith='700px'>
            © 2022 - Bohdan Bihanskyi | Created with<span className='copyright__heart'><MdFavorite /></span>React
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

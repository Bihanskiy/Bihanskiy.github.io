import React from 'react';
import { MdDesktopMac, MdCode, MdOutlineStar } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle heading="Cases" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="responsive"
            desc="My layout looks good on all devices. It response to different screen sizes; from 320px(small devices) to 1920px(widescreen monitors)."
          />
          <ServicesSectionItem
            icon={<MdOutlineStar />}
            title="fast"
            desc="Fast load times my highest priority. I use different best practices for image optimization, minimization, compression, code splitting, etc."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="code quality"
            desc="Scalable, structured, clean and well organized code. This is one of my main goals in the process of development. For this purpose I use DRY Principle and best practices  for writing super readable code. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: ${props => props.mw};
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children, maxwith = '500px' }) {
  return (
    <PStyle className="para" mw={maxwith}>
      <p>{children}</p>
    </PStyle>
  );
}

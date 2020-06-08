import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.section`
  height: 10%;
  background: #6208ff;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>© Yakware LLC 2020</p>
    </FooterSection>
  );
};

export default Footer;

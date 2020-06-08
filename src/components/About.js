import React from 'react';

import UsersSolid from '../images/users-solid.svg';
import HandsSolid from '../images/hands-solid.svg';
import DonateSolid from '../images/moneywithhand.svg';
import GiantLogo from '../images/GiantLogo.svg';

import {
  AboutSection,
  Container,
  Title,
  MiddleContainer,
  IconContainer,
  IconTitle,
} from './AboutStyled';

const About = () => {
  return (
    <AboutSection id="About">
      <Container>
        <Title>Lorem Ipsum Dummy</Title>
        <MiddleContainer>
          <IconContainer>
            <img src={UsersSolid} alt="Group Of Users" />
            <IconTitle>
              <span>Lorem</span> Ipsum is simply <span>dummy</span>
            </IconTitle>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
          </IconContainer>

          <img src={GiantLogo} alt="Lending Hand Logo" />

          <IconContainer>
            <img src={HandsSolid} alt="2 Extended Helping Hands" />
            <IconTitle>
              Lorem <span>Ipsum is simply</span> dummy
            </IconTitle>
            <p>Lorem Ipsum is simply dummy text of the printing and.</p>
          </IconContainer>
        </MiddleContainer>
        <IconContainer style={{ marginTop: '3%' }}>
          <img src={DonateSolid} alt="2 Extended Helping Hands" />
          <IconTitle>
            <span>Lorem</span> Ipsum is simply <span>dummy</span>
          </IconTitle>
          <p>Lorem Ipsum is simply dummy text of the printing and.</p>
        </IconContainer>
      </Container>
    </AboutSection>
  );
};

export default About;

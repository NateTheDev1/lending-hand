import React from 'react';
import styled from 'styled-components';
import UsersSolid from '../images/users-solid.svg';
import HandsSolid from '../images/hands-solid.svg';
import DonateSolid from '../images/moneywithhand.svg';
import GiantLogo from '../images/GiantLogo.svg';

const About = () => {
  const AboutSection = styled.section`
    height: 100vh;
    background: #f9f9fa;
  `;

  const Container = styled.section`
    margin: 0 auto;
    max-width: 1440px;
    height: 100%;
    padding-top: 3%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  `;

  const Title = styled.h2`
    text-align: center;
    letter-spacing: 18px;
    font-weight: 800;
    color: #6208ff;
    font-size: 2.2rem;
    text-transform: uppercase;
  `;

  const MiddleContainer = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: space-between;

    align-items: center;
  `;

  const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
      margin-top: 1%;
      font-weight: 400;
      font-size: 1.2rem;
    }
  `;

  const IconTitle = styled.h3`
    margin-top: 2%;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.5rem;
    span {
      color: #6208ff;
    }
  `;

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

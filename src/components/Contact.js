import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background: #f9f9fa;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  margin-bottom: 0;
  font-weight: 700;
  font-size: 2.5rem;
`;

const SubTitle = styled.h3`
  margin-top: 1%;
  font-weight: 600;
  font-size: 1.5rem;
`;

const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
`;

const Card = styled.div`
  width: 25%;
  margin-bottom: 10%;
  div {
    border-radius: 15px;
    border-top: 3vh solid #6208ff;
    background: white;
    height: 40vh;
  }
`;

const CardTitle = styled.h3`
  text-align: center;
  letter-spacing: 18px;
  font-weight: 800;

  font-size: 2.2rem;
  text-transform: uppercase;
`;

const Contact = () => {
  return (
    <ContactSection id="Contact">
      <TopDiv>
        <Title>Contact Us</Title>
        <SubTitle>Lorem Ipsum is simply dummy text of the printing.</SubTitle>
      </TopDiv>
      <CardDiv>
        <Card>
          <CardTitle>Social</CardTitle>
          <div />
        </Card>
        <Card>
          <CardTitle>Company</CardTitle>
          <div />
        </Card>
        <Card>
          <CardTitle>Other</CardTitle>
          <div />
        </Card>
      </CardDiv>
    </ContactSection>
  );
};

export default Contact;

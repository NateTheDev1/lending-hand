import React from 'react';
import Phone from '../images/Iphone11.svg';
import { HomeSection, Container, PhoneContainer, Title, Paragraph, Button } from './HomeStyled';

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <PhoneContainer>
          <Title>
            Join <span>Lending Hand</span> Today.
          </Title>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.{' '}
          </Paragraph>
          <a href="#Download">
            <Button>Get Started</Button>
          </a>
        </PhoneContainer>
        <img src={Phone} />
      </Container>
    </HomeSection>
  );
};

export default Home;

import React from 'react';
import Phone from '../images/ReplaceInsideWithAppImage.svg';
import {
  HomeSection,
  Container,
  PhoneContainer,
  Title,
  Paragraph,
  Button,
  ActionButton,
} from './HomeStyled';
import ActionButtonDown from '../images/ActionButtonDown.svg';

const Home = () => {
  return (
    <HomeSection id="Home">
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
          <a href="#About" style={{ marginTop: '8%' }} className="action-btn-down">
            <ActionButton src={ActionButtonDown} alt="Continue To Next Page" />
          </a>
        </PhoneContainer>
        <div>
          <img src={Phone} alt="Iphone 11 Lending Hand App" />
        </div>
      </Container>
    </HomeSection>
  );
};

export default Home;

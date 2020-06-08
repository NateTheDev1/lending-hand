import styled from 'styled-components';

export const HomeSection = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
`;

export const PhoneContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

export const Container = styled.section`
  margin-top: 10%;
  height: 75vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 8%;
  span {
    color: #6208ff;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 8%;
  line-height: 44px;
  font-weight: 600;
  font-size: 1.3rem;
`;

export const Button = styled.button`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  width: 200px;
  color: white;
  background: #6208ff;
  border-radius: 10px;
  height: 50px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ActionButton = styled.img``;

import styled from 'styled-components';

export const HomeSection = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  min-height: 100vh;
`;

export const PhoneContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  @media (max-width: 850px) {
    align-items: center;
    width: 100%;
  }
`;

export const Container = styled.section`
  margin-top: 20%;
  /* height: 100vh; */

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 850px) {
    margin-top: 0;
    width: 100%;

    padding: 2%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }

  /*
  @media (max-width: 600px) {
    margin-top: 50%;
  }
 */
  @media (max-width: 600px) {
    img {
      display: none;
    }

    .BigLogo {
      display: inline !important;
    }
  }
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

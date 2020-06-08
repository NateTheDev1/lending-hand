import styled from 'styled-components';

export const AboutSection = styled.section`
  background: #f9f9fa;
`;

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const Title = styled.h2`
  text-align: center;
  letter-spacing: 18px;
  font-weight: 800;
  color: #6208ff;
  font-size: 2.2rem;
  text-transform: uppercase;
`;

export const MiddleContainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    margin-top: 1%;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

export const IconTitle = styled.h3`
  margin-top: 2%;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 1.5rem;
  span {
    color: #6208ff;
  }
`;

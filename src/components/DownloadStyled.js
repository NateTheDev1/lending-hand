import styled from 'styled-components';

export const DownloadSection = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  justify-content: center;
  @media (max-width: 850px) {
    padding: 2%;
    text-align: center;
  }
`;

export const PhoneDiv = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const DownloadContent = styled.div`
  margin-left: 5%;
  display: flex;
  justify-content: center;
  width: 35%;
  flex-direction: column;
  @media (max-width: 850px) {
    padding: 1%;
    width: 100%;
  }

  .DownloadButton {
    transition: 0.5s;

    &:hover {
      transform: translateY(20px);
    }
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 8%;
  line-height: 44px;
  font-weight: 600;
  font-size: 1.3rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  span {
    color: #6208ff;
  }
`;

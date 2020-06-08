import React from 'react';

import Phone from '../images/ReplaceInsideWithAppImage.svg';
import DownloadButton from '../images/DownloadAppStore.svg';

import { DownloadContent, DownloadSection, PhoneDiv, Paragraph, Title } from './DownloadStyled';

const Download = () => {
  return (
    <DownloadSection id="Download">
      <PhoneDiv>
        <img src={Phone} alt="Iphone 11 Lending Hand App" />
      </PhoneDiv>
      <DownloadContent>
        <Title>
          <span>Download Lending Hand</span> Now And Enjoy All The Benefits.
        </Title>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the.
        </Paragraph>
        <a href="#AppStore">
          <img src={DownloadButton} alt="Download Lending Hand On The App Store" />
        </a>
      </DownloadContent>
    </DownloadSection>
  );
};

export default Download;

import React from 'react';

import Logo from '../images/Logo.svg';
import { Link } from 'gatsby';
import { Header, NavContainer, Image, NavLinkContainer, NavItem } from './HeaderStyled';

const HeaderNav = () => {
  return (
    <Header>
      <NavContainer>
        <Image src={Logo} alt="Lending Hand Logo" />
        <NavLinkContainer>
          <NavItem href="#Home">Home</NavItem>
          <NavItem href="#About">About</NavItem>
          <NavItem href="#Download">Download</NavItem>
          <NavItem href="#Contact">Contact</NavItem>
        </NavLinkContainer>
      </NavContainer>
    </Header>
  );
};

export default HeaderNav;

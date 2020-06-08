import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 9999;
  min-height: 10vh;
  @media (max-width: 850px) {
    display: none;
  }

  @media (max-width: 1470px) {
    padding: 1.25%;
  }
`;

export const NavContainer = styled.nav`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img``;

export const NavLinkContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.a`
  color: #414fff;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    font-size: 1.3rem;
    color: #6208ff;
  }
`;

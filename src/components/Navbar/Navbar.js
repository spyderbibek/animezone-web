import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  NavLogo,
  DrawerIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoWrapper>
            <NavLogo color="#fff">Anime</NavLogo>
            <NavLogo color="#ff5722">Zone</NavLogo>
          </NavLogoWrapper>
          <DrawerIcon onClick={toggle}>
            <FaBars />
          </DrawerIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="features">Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="screenshots">Screenshots</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink>Download App</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

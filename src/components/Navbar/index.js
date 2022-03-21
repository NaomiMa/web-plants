import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            MyPlant
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
               
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="questionnaire"
               
              >
                שאלון התאמה לצמח
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="forum"
              
              >
                פורום ייעוץ ושיתוף
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="plants"
              
              >
                הצמחים שלנו
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="news">חדשות ועדכונים</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

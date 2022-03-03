import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarBtnWrap,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home">Home</SidebarLink>
          <SidebarLink to="questionnaire">שאלון התאמה לצמח</SidebarLink>
          <SidebarLink to="forum">פורום ייעוץ ושיתוף</SidebarLink>
          <SidebarLink to="plants">הצמחים שלנו</SidebarLink>
          <SidebarLink to="news">חדשות ועדכונים</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

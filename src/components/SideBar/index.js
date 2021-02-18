import React from 'react';

import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon OnClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="about" onClick={toggle}>
              About
            </SideBarLink>
            <SideBarLink to="dicover" onClick={toggle}>
              Discover
            </SideBarLink>
            <SideBarLink to="services" onClick={toggle}>
              Services
            </SideBarLink>
            <SideBarLink to="signup" onClick={toggle}>
              Sign Up
            </SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
            <SideBarRoute to="/signin">Sign In</SideBarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;

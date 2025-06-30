import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/mylogo.png" alt="my logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 55px;
    width: auto;
  }

  //   @media (max-width: ${({ theme }) => theme.media.mobile}) {
  //     flex-direction: column;
  //     align-items: flex-start;
  //     padding: 1rem;
  //     gap: 1rem;
  //   }
`;

export default Header;

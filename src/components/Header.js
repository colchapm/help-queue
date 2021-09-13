import React from "react";
import ticketsImage from "./../img/ticket.png";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: black;
`;

const StyledWrapper = styled.section`
  background-color: lightgray;
`;


function Header(){
  return (
    <StyledWrapper>
      <HelpQueueHeader>
        Help Queue
      </HelpQueueHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In / Sign Up / Sign Out</Link>
        </li>
      </ul>
      <img src={ticketsImage} alt="an image of tickets" />
    </StyledWrapper>


  );
}

export default Header;
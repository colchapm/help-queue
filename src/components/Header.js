import React from "react";
import ticketsImage from "./../img/ticket.png";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In / Sign Up / Sign Out</Link>
        </li>
      </ul>
      <img src={ticketsImage} alt="an image of tickets" />
    </React.Fragment>

  );
}

export default Header;
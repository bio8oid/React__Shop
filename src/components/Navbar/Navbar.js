import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="navbar-component">
      <nav>
        <NavLink exact to="/home" activeClassName="active">HOME</NavLink>
        <NavLink exact to="/faq" activeClassName="active">FAQ</NavLink>
        <NavLink exact to="/terms" activeClassName="active">TERMS & CONDITIONS</NavLink>
        <NavLink exact to="/contact" activeClassName="active">CONTACT</NavLink>
        <NavLink exact to="/cart" activeClassName="active">CART</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
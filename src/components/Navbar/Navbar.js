//import React from "react";
//import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import "./Navbar.scss";

/*
const Navbar = props => {
  return (
    <div className="navbar-component">
      <nav className='menu'>
        <NavLink href="/home" activeClassName="active">HOME</NavLink>
        <NavLink exact to="/faq" activeClassName="active">FAQ</NavLink>
        <NavLink exact to="/terms" activeClassName="active">TERMS & CONDITIONS</NavLink>
        <NavLink exact to="/contact" activeClassName="active">CONTACT</NavLink>
        <NavLink exact to="/cart" activeClassName="active">CART</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
*/

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavMenu extends Component {

  toggleMenu = () => {
    this.props.toggleMenu()  
  }
  
  render() {
    return (
      <div>
        <Navbar color="ligh" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.props.toggleMenu} />
          <Collapse isOpen={this.props.isOpen} navbar>
            <nav className="ml-auto" navbar>
            <NavLink  to="/home" activeClassName="active">HOME</NavLink>
        <NavLink href="/faq" >FAQ</NavLink>
        <NavLink href="/terms/" activeClassName="active">TERMS & CONDITIONS</NavLink>
        <NavLink href="/contact/#" activeClassName="active">CONTACT</NavLink>
        <NavLink href="/cart#/" activeClassName="active">CART</NavLink>
            </nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.isOpen)
  return {
    isOpen: state.isOpen  
  }
}

const mapDispatchToProps =  {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
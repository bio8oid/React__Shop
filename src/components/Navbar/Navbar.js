import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import { toggleMenu } from '../../actions/toggleMenuAction'
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
import "./Navbar.scss";

class NavMenu extends Component {

  toggleMenu = () => {
    this.props.toggleMenu()
  }

  render() {
    return (
        <Navbar className='navbar-component' color="ligh" light expand="md">
        <NavbarToggler aria-label="toggler" style={{ margin: '20px'}} onClick={this.props.toggleMenu} />
          <Collapse isOpen={this.props.isOpen} navbar>
            <Nav className="ml-auto menu" navbar>
              <NavLink style={{ textDecoration: 'none' }} exact to="/" activeClassName="active">HOME</NavLink>
              <NavLink style={{ textDecoration: 'none' }} exact to="/faq" activeClassName="active">FAQ</NavLink>
              <NavLink style={{ textDecoration: 'none' }} exact to="/terms" activeClassName="active">TERMS & CONDITIONS</NavLink>
              <NavLink style={{ textDecoration: 'none' }} exact to="/contact" activeClassName="active">CONTACT</NavLink>
              <NavLink style={{ textDecoration: 'none' }} exact to="/cart" activeClassName="active">CART</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.toggleMenuReducer.isOpen
  }
}

const mapDispatchToProps = {
  ...actions,
  toggleMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
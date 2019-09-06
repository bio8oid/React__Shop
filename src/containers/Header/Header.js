import React from "react";
import  NavMenu  from "../../components/Navbar/Navbar";
import Indicator from '../../components/Indicator/Indicator';
import { Link } from 'react-router-dom'
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-component">
        <Link to="/home">
        <div className='logo-image'></div>
        </Link>
        <NavMenu />
        <Indicator />
      </div>
    );
  }
}

export default Header;
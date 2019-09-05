import React from "react";
import  NavMenu  from "../../components/Navbar/Navbar";
import Indicator from '../../components/Indicator/Indicator';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className='logo-image'></div>
        <NavMenu />
        <Indicator />
      </div>
    );
  }
}

export default Header;
import React from "react";
import  Navbar  from "../../components/Navbar/Navbar";
import Indicator from '../../components/Indicator/Indicator';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-component container">
        <div className='logo-image'></div>
        <Navbar />
        <Indicator />
      </div>
    );
  }
}

export default Header;
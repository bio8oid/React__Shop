import React from "react";
import  Navbar  from "../../components/Navbar/Navbar";
import './Footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-component">
          <p className='copyrights'>bio8oid © 2019</p>
          <div className='footer-navbar'>
        <Navbar />
          </div>
      </div>
    );
  }
}

export default  Footer;

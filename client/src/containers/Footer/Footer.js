import React from "react";
import  Navbar  from "../../components/Navbar/Navbar";
import './Footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-component container">
        <p className='copyrights'>bio8oid © {new Date().getFullYear()}</p>
          <div className='footer-navbar'>
        <Navbar />
          </div>
      </div>
    );
  }
}

export default  Footer;

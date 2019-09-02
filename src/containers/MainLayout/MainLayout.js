import React from "react";

import  Navbar  from "../../components/Navbar/Navbar";
import  Footer  from "../../containers/Footer/Footer";

//import PageTransition from 'react-router-page-transition';

//import './MainLayoutTransition.scss'

class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
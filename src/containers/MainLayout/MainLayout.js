import React from "react";

import  Navbar  from "../../components/Navbar/Navbar";
import  Footer  from "../../containers/Footer/Footer";
import Indicator from '../../components/Indicator/Indicator'


//import PageTransition from 'react-router-page-transition';

//import './MainLayoutTransition.scss'

class MainLayout extends React.Component {
  render() {
    return (
      <div className="main-component">
        <Navbar />
        <Indicator />
        <div className='container'>
        {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
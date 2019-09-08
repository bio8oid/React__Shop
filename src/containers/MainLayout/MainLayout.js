import React from "react";
import  Header  from "../../containers/Header/Header";
import  Footer  from "../../containers/Footer/Footer";
import './MainLayout.scss';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="main-component">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
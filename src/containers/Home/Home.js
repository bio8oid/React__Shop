import React from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import Selector from '../../components/Selector/Selector';
import "./Home.scss";

class Home extends React.Component {

  render() {
    return (
      <div className='home-container container'>
        <Selector />
        <ProductsList />
      </div>
    )
  }
}

export default Home;

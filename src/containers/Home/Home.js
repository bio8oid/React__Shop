import React from "react";
import  ProductsList  from "../../components/ProductsList/ProductsList";
import Selector from '../../components/Selector/Selector'
import "./Home.css"

//import { Cart, Product } from "react-shopping-cart";
//import { Provider } from 'react-redux'
//import store from '../../components/cart/cartStore';

class Home extends React.Component {
  
  render() {
    return <div className='main-view-container'>
      <Selector />
      <ProductsList />
          </div>

  }
}

export default Home;

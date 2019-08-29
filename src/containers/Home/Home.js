import React from "react";
import  ProductsList  from "../../components/ProductsList/ProductsList";
import "./Home.css"
//import { Cart, Product } from "react-shopping-cart";
//import { Provider } from 'react-redux'
//import store from '../../components/cart/cartStore';

class Home extends React.Component {
  
  render() {
    return <div>Home
      <ProductsList />
          </div>

  }
}

export default Home;

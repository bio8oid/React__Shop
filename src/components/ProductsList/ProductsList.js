import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, passID, sortedByPriceAsc, sortedByPriceDesc } from '../../actions/actions'
//import { CSSTransition } from 'react-transition-group';
//import "./ProductsListAnimations.css"

import Pulse from 'react-reveal/Pulse';

//import Selector from '../Selector/Selector'
import { Link } from 'react-router-dom'
import Data from "react-data-pagination";
//import getPageData from "react-data-pagination";
import './ProductsList.scss'



class ProductsList extends Component {

  handleClick = id => {
    this.props.addToCart(id);
  }

  handleId = id => {
    this.props.passID(id);
  }

  DataContainer = () => {
    return (
      <div></div>
    );
  };

  stateHandle = () => {
   // initiailState = props.dataset
   // newState = { items: newstate }
  } 

  DataList = props => {
    let dataset = props.dataset;

    //console.log(props.dataset)

    return (

      <Pulse cascade>
        <div className="products-container">

          {dataset.map((item) => (
            <div  className="card" key={item.id}>
              <div className="card-image">

              <button to="/" className="products-list-button" onClick={()=>{this.handleClick(item.id)}}>Add to Basket</button>

                <Link to="/product"><img src={item.img} alt={item.title}  onClick={() => { this.handleId(item.id) }} /></Link>

                <h6 className="card-title">{item.title}</h6>
                <p className="card-price">Price: {item.price} £</p>
              
              </div>

            </div>
          ))}
        </div>
      </Pulse>
    );
  }

  render() {

   let dataset =  this.props.items

    return (
      <div className="App" >
        <Data
          dataset={dataset}
          offset={0}
          rows={6}
          dataBody={this.DataContainer}
          dataList={this.DataList}
          wrapper="div"
          wrapperCssClass="striped"
          buttonCssClass="button"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = dispatch => {

  return {
    addToCart: id => { dispatch(addToCart(id)) },
    passID: id => { dispatch(passID(id)) },
    sortedByPriceAsc: () => { dispatch(sortedByPriceAsc()) },
    sortedByPriceDesc: () => { dispatch(sortedByPriceDesc()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions';
import Pulse from 'react-reveal/Pulse';
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

  DataList = props => {
    let dataset = this.props.items;

    //console.log(props.dataset)

    return (

      <Pulse cascade>
        <div className="products-container">

          {dataset.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <button className="products-list-button" onClick={() => { this.handleClick(item.id) }}>Add to Cart</button>
                <Link to="/product"><img src={item.img} alt={item.title} onClick={() => { this.handleId(item.id) }} /></Link>
              </div>
              <h6 className="card-title">{item.title}</h6>
              <p className="card-price">Price: {item.price} £</p>

            </div>
          ))}
        </div>
      </Pulse>
    );
  }

  render() {

    let dataset = this.props.items

    return (
      <div className="App" >
        <Data
          dataset={dataset}
          offset={0}
          rows={6}
          dataBody={this.DataContainer}
          dataList={this.DataList}
          wrapper="div"
          wrapperCssClass="pagination"
          buttonCssClass="pag-btn"
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

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
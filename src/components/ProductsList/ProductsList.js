import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, passID, sortedByPriceAsc, sortedByPriceDesc } from '../../actions/actions'
import Selector from '../Selector/Selector'
import { Link } from 'react-router-dom'
import Data from "react-data-pagination";
import './ProductsList.css'


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
    let dataset = props.dataset
    const photoStyle = {
      height: '100px', width: '100px'
    };

    return (

      <div className='main-view-container'>
        <Selector />
        <div className="products-container">
          {dataset.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <i className="fas fa-arrow-right"></i>
                <Link to="/product"><img src={item.img} alt={item.title} style={photoStyle} onClick={() => { this.handleId(item.id) }} /></Link>

                <span className="card-title">{item.title}</span>
                <span to="/" className="btn-floating  red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
              </div>

              <div className="card-content">
                <p>{item.desc}</p>
                <p><b>Price: {item.price} £</b></p>
              </div>

            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {

    return (
      <div className="App" >
        <Data
          dataset={this.props.items}
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
    items: state.items
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

export default connect(mapStateToProps, mapDispatchToProps )(ProductsList)
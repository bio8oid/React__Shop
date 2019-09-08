import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions';
import Zoom from 'react-reveal/Zoom';
import './Product.scss'

class Product extends Component {

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  handleId = (id) => {
    this.props.passID(id);
  }

  render() {
    let itemList = this.props.clickedProduct.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img className='img-fluid product-image' src={item.img} alt={item.title} />
            <h5 className="card-title">{item.title}</h5>
            <button to="/" className="products-list-button" onClick={() => { this.handleClick(item.id) }}>Add to cart</button>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <h3>Price: {item.price} £</h3>
          </div>
        </div>
      )
    })

    return (
      <Zoom cascade>
        <div className="product-component container">
          <h1 className="product-header">{this.props.clickedProduct.map(({ title }) => title.slice(0))}</h1>
          <div className="product-wrapper" >
            {itemList}
          </div>
        </div>
      </Zoom>
    )

  }
}

const mapStateToProps = (state) => {
  console.log(state.clickedProduct.map(({ title }) => title.slice(0))
  )

  return {
    clickedProduct: state.clickedProduct
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
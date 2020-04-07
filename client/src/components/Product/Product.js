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
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img className='img-fluid product-image' src={item.img} alt={item.title} />
            <h5 className="card-title">{item.title}</h5>
            <button to="/" className="add-to-cart-button" onClick={() => { this.handleClick(item.id) }}>Add to cart</button>
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
          <h1 className="product-header">{this.props.items.map(({ title }) => title.slice(0))}</h1>
          <div className="product-wrapper" >
            {itemList}
          </div>
        </div>
      </Zoom>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.itemsReducers.describedProduct
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, passID } from '../../actions/actions'
//import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../../actions/actions'
//import Checkout from '../Checkout/Checkout'

import Zoom from 'react-reveal/Zoom';


class Product extends Component {

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  handleId = (id) => {
    this.props.passID(id);
  }

  render() {

    //console.log(this.handleId(this.id)); state.clickedProduct
    const photoStyle = {
      height: '100px', width: '100px'
    };




let itemList = this.props.clickedProduct.map(item=>{
  //console.log(this.handleClick(item.id))
 
    return(
      
      <div className="card transition-item" key={item.id}>
                  <div className="card-image">
                      <img src={item.img} alt={item.title} style={photoStyle} />
                      <span className="card-title">{item.title}</span>
                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                  </div>

                  <div className="card-content">
                      <p>{item.desc}</p>
                      <p><b>Price: {item.price} £</b></p>
                  </div>
           </div>
      )
    })

  return(
    <Zoom cascade>
      <div className="container">
          <h3 className="center">Our items</h3>
          <div className="box" >
              {itemList}
          </div>
      </div>
          </Zoom>
  )

  }
}

const mapStateToProps = (state) => {
  //console.log(state.clickedProduct)
  return {
    clickedProduct: state.clickedProduct
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) },
    passID: (id) => { dispatch(passID(id)) },

    removeItem: (id) => { dispatch(removeItem(id)) },
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
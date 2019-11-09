import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/actions';
import Checkout from '../Checkout/Checkout'
import { faPlusSquare, faMinusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bounce from 'react-reveal/Bounce'
import './Cart.scss'

class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <Bounce left  key={item.id}>
                            <div className="cart-item" key={item.id}>

                                <img src={item.img} alt={item.img} className="item-img" />

                                <div className="item-desc">
                                    <h5 className="title">{item.title}</h5>
                                    <p>Price: {item.price} £</p>


                                    <div className="add-remove">

                                        <div className="quantity">
                                            <p>Quantity: </p>
                                            <p>{item.quantity}</p>
                                        </div>


                                        <div className="cart-item-buttons">
                                            <div className="plus-minus-wrap">
                                                <Link to="/cart" onClick={() => { this.handleAddQuantity(item.id) }}>
                                                    <FontAwesomeIcon icon={faPlusSquare} />
                                                </Link>

                                                <Link to="/cart" onClick={() => { this.handleSubtractQuantity(item.id) }}>
                                                    <FontAwesomeIcon icon={faMinusSquare} />
                                                </Link>
                                            </div>

                                            <Link to="/cart" className="remove-button" onClick={() => { this.handleRemove(item.id) }}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Bounce>
                    )
                })
            ) :

            (
                <p>Your cart is empty...</p>
            )
        return (

            <Bounce left>

                <div className="cart-component container">
                        <h3>In your cart:</h3>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    <Checkout />
                </div>

            </Bounce>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
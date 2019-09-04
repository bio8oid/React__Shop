import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../../actions/actions'
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

    goBack = () => {
        this.props.history.goBack();
    }


    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <Bounce left>
                            <li className="cart-item" key={item.id}>

                                <img src={item.img} alt={item.img} className="item-img" />

                                <div className="item-desc">
                                    <h5 className="title">{item.title}</h5>
                                    <h5>Price: {item.price} £</h5>

                                    <div className="add-remove">
                                        <h5>Quantity: {item.quantity}</h5>

                                        <Link to="/cart" className="cart-plus" onClick={() => { this.handleAddQuantity(item.id) }}>
                                            <FontAwesomeIcon icon={faPlusSquare} />
                                        </Link>

                                        <Link to="/cart" className="cart-minus" onClick={() => { this.handleSubtractQuantity(item.id) }}>
                                            <FontAwesomeIcon icon={faMinusSquare} />
                                        </Link>

                                        <Link to="/cart" className="remove-button" onClick={() => { this.handleRemove(item.id) }}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Link>

                                    </div>

                                </div>

                            </li>
                        </Bounce>
                    )
                })
            ) :

            (
                <p>Nothing yet :).</p>
            )
        return (
            <Bounce left>

                <div className="container transition-item">
                    <div className="cart">
                        <h5>You have ordered:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>
                    <Checkout />
                </div>
            </Bounce>

        )
    }
}



const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
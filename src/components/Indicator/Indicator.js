import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/actions'
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Indicator.scss'

export class Indicator extends Component {

    render() {
        return (
            <Link to="/cart">
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <div className="cart-counter">
                        {this.props.cartItems}
                    </div>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Indicator)
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
            <Link className="cart-icon-link" to="/cart">
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <div className="cart-counter">
                        {this.props.indicatorItems}
                    </div>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = state => {
    return {
        indicatorItems: state.itemsReducers.indicatorItems
    }
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Indicator)
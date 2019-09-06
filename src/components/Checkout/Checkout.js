import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Checkout.scss'


class Checkout extends Component {

    componentWillUnmount = () => {
        if (this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }

    handleCode = () => {
        alert('Invalid code !')
    }

    render() {

        return (
            <div className="checkout-component container">
                <li className='checkout-code'>
                    <input type="text" placeholder='Enter code' onChange={this.handleCode} />
                </li>
                <li className="checkout-shipping">
                    <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                    <label>Shipping (+ 3.99 £)</label>
                </li>
                <li className="checkout-total">Total: {this.props.total}  £</li>
                <button onClick={() => { alert('CHECK THIS OUT !!!') }} className="checkout-btn">Checkout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)

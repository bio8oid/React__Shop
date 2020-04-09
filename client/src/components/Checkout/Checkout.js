import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions';
import { inputValueHandle } from '../../redux/actions/inputCodeAction';
import './Checkout.scss'

class Checkout extends Component {

    componentWillUnmount = () => {
        if (this.refs.shipping.checked) {
            this.props.substractShipping();
        }
    }

    handleChecked = e => {
        if (e.target.checked) {
            this.props.addShipping();
            if ((window.location.href.indexOf('cart') > -1) && this.props.addedItems.length > 0) {
                alert("Try our discount code: CODE10%");
            }
        }
        else {
            this.props.substractShipping();
        }
    }

    handleChange = event => {
        this.props.inputValueHandle(event.target.value);
    }

    handleCode = e => {
        e.preventDefault();
        if (this.props.total === 0 || this.props.total === 3.99) {
            alert("NOTHING TO DISCOUNT !");
        }
        else if (this.props.text === "CODE10%") {
            const icons = document.querySelectorAll('.discount-handle');
            for (var item of icons) {
                item.classList.toggle("invisible");
            }
            document.getElementById('code-input').disabled = true;
            document.getElementById("discount-message").classList.toggle("hide");
            this.props.discountHandle();
        } else {
            alert('INVALID CODE');
        }
    }

    render() {

        return (
            <div className="checkout-component container">
                <form onSubmit={this.handleCode} className='checkout-code'>
                    <input id="code-input" type="text" placeholder='Enter code' onChange={this.handleChange} />
                    <input className="apply-btn btn" type="submit" value="Apply" />
                </form>
                <li className="hide discount" id="discount-message">YOUR 10% DISCOUNT APPLIED</li>
                <li className="checkout-shipping">
                    <label>
                        <input id="shipping-checkbox" type="checkbox" ref="shipping" onChange={this.handleChecked} />
                        Shipping (+ 15.00 £)
                    </label>
                </li>
                <li className="checkout-total">Total: {this.props.total}  £</li>
                <button onClick={() => { window.location.href = 'https://www.paypal.com/signin'; }} className="checkout-btn">Checkout</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addedItems: state.itemsReducers.addedItems,
        total: state.itemsReducers.total,
        text: state.inputCodeReducers.text
    }
}

const mapDispatchToProps = {
    ...actions,
    inputValueHandle
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
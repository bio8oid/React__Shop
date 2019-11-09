import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions';
import './Checkout.scss'
import { createHashHistory } from 'browserHistory'
const browserHistory = createHashHistory()


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
      }

    componentWillUnmount = () => {
        if (this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = e => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }

    handleChange = event => {
        this.setState({value: event.target.value});
      }

    handleCode = e => {
        e.preventDefault();
        if (this.props.total === 0) {
            alert("Total amount is 0£ - NOTHING TO DISCOUNT !")
        }
        else if (this.state.value === "CODE10"){
            document.getElementById('code-input').disabled = true;
            document.getElementById("discount-message").classList.toggle("hide");
            this.props.discountHandle();
        } else {
            alert('INVALID CODE');
        }
    }

    render() {

        // browserHistory.listen(function(ev) {
        //     console.log(ev);
        //     console.log('listen', ev.pathname);
        //   });
          

//         document.onload = (e) => { 
// if ((window.location.href.indexOf('cart') > -1) && this.props.addedItems.length > 0) {
//     // window.setTimeout(window.alert, 1500, 'Try our discount code: CODE10')
//     // setTimeout(alert('works'), 1000)
//     setTimeout(() => { alert("Hello") }, 1500);
// }
//         }

        return (
            <div className="checkout-component container">
                <form onSubmit={this.handleCode} className='checkout-code'>
                    <input id="code-input" type="text" placeholder='Enter code' onChange={this.handleChange} />
                </form>
                <li className="hide discount" id="discount-message">YOU HAVE GOT 10% DISCOUNT</li>
                <li className="checkout-shipping">
                    <input id="shipping-checkbox" type="checkbox" ref="shipping" onChange={this.handleChecked} />
                    <label>Shipping (+ 3.99 £)</label>
                </li>
                <li className="checkout-total">Total: {this.props.total}  £</li>
                <button onClick={() => { window.location.href = 'https://www.paypal.com/signin'; }} className="checkout-btn">Checkout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total,
        text: state.text
    }
}

const mapDispatchToProps = {
    ...actions
  }  

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductsRequest, addToCart, passID, setPage } from '../../actions/actions';
import Pulse from 'react-reveal/Pulse';
import { Link } from 'react-router-dom';
import './ProductsList.scss';
import { Button, ButtonGroup } from 'reactstrap';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductsList extends Component {

  componentDidMount() {
    this.props.loadProducts();
  }

  handleClick = id => {
    this.props.addToCart(id);
  }

  handleId = id => {
    this.props.passID(id);
  }

  handlePage = value => e => {
    let id = e.target.id;
    this.props.setPage(id);
  }

  render() {

    const dataset = this.props.items;
    const pageSet = this.props.page;
    const offset = (pageSet - 1) * 6
    const paginatedItems = dataset.slice(offset).slice(0, 6)
    const pages = Math.ceil(dataset.length / 6);
    const pageNumbers = Array.from({ length: pages }, (x, page) => ++page);

    this.componentDidUpdate = () => {

      if (pageSet === pageNumbers.length) {
        document.getElementById('right').classList.remove('showy');
      } else {
        document.getElementById('right').classList.add('showy');
      }
      if (pageSet === pageNumbers[0]) {
        document.getElementById('left').classList.remove('showy');
      } else {
        document.getElementById('left').classList.add('showy');
      }
    }

    return (

      <Pulse cascade>
        <div className="products-container">

          {paginatedItems.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <button className="add-to-cart-button" onClick={() => { this.handleClick(item.id) }}>Add to Cart</button>
                <Link to="/product">
                  <img src={item.img} alt={item.title} onClick={() => { this.handleId(item.id) }} />
                </Link>
              </div>
              <h6 className="card-title">{item.title}</h6>
              <p className="card-price">Price: {item.price} £</p>
            </div>
          ))}

          <div className="paginator">
            <FontAwesomeIcon className="arrow " id="left" onClick={this.handlePage(this.id)} icon={faArrowLeft} />
            {pageNumbers.map(id => {
              return (
                <ButtonGroup key={id}>
                  <Button className="but" id={id} key={id} onClick={this.handlePage(id)}>{id}</Button>
                </ButtonGroup>
              );
            })}
            <FontAwesomeIcon className="arrow showy" id="right" onClick={this.handlePage(this.id)} icon={faArrowRight} />
          </div>

        </div>
      </Pulse>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.itemsReducers.page,
    items: state.itemsReducers.items,
    itemsTemplate: state.itemsReducers.itemsTemplate,
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
  passID: id => dispatch(passID(id)),
  setPage: id => dispatch(setPage(id)),
  loadProducts: () => dispatch(loadProductsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
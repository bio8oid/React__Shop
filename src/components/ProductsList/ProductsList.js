import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions';
import Pulse from 'react-reveal/Pulse';
import { Link } from 'react-router-dom'
import './ProductsList.scss'
import { Button, ButtonGroup } from 'reactstrap';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductsList extends Component {

  handleClick = id => {
    this.props.addToCart(id);
  }

  handleId = id => {
    this.props.passID(id);
  }

  paginator = (items, page, per_page) => {

    page = page || 1
    per_page = per_page || 6
    let offset = (page - 1) * per_page
    let dataset = this.props.items
    let paginatedItems = dataset.slice(offset).slice(0, per_page)

    return {
      page: page,
      per_page: per_page,
      total: dataset.length,
      data: paginatedItems
    };
  }

  render() {
    const dataset = this.props.items;
    const pageSet = this.props.page;
    const paginatorData = this.paginator(dataset);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dataset.length / paginatorData.per_page); i++) {
      pageNumbers.push(i);
    }

    const handlePage = value => e => {
      if (value === 1) {
        this.props.setPage1();
      }
      if (value === 2) {
        this.props.setPage2();
      }
      if (value === 3) {
        this.props.setPage3();
      }
      if (value === 4) {
        this.props.setPage4();
      }
      if (value === 5) {
        this.props.setPage5();
      }
      if (e.target.id === "left") {
        this.props.setPreviousPage();
      }
      if (e.target.id === "right") {
        this.props.setNextPage();
      }
    }

    return (

      <Pulse cascade>
        <div className="products-container">

          {this.paginator(dataset, pageSet).data.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <button className="add-to-cart-button" onClick={() => { this.handleClick(item.id) }}>Add to Cart</button>
                <Link to="/product"><img src={item.img} alt={item.title} onClick={() => { this.handleId(item.id) }} /></Link>
              </div>
              <h6 className="card-title">{item.title}</h6>
              <p className="card-price">Price: {item.price} £</p>
            </div>
          ))}

          <div className="paginator">
            <FontAwesomeIcon className="arrow" id="left" onClick={handlePage(this.id)} icon={faArrowLeft} />
            {pageNumbers.map(id => {
              return (
                <ButtonGroup>
                  <Button className="but" id={id} key={id} onClick={handlePage(id)}>{id}</Button>
                </ButtonGroup>
              );
            })}
            <FontAwesomeIcon className="arrow" id="right" onClick={handlePage(this.id)} icon={faArrowRight} />
          </div>

        </div>
      </Pulse>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    page: state.page
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
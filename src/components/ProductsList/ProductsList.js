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

  
  
  render() {
    

      this.props.paginator();


    const dataset = this.props.items;
    let pageSet = this.props.page;
    let offset = (pageSet - 1) * 6
    let paginatedItems = dataset.slice(offset).slice(0, 6)

    const handlePage = value => e => {
      let id = e.target.id;

      // console.log(pageNumbers[pageNumbers.length - 1])
      // console.log(pageNumbers)
      // console.log(pageNumbers.length)
      // console.log("ajdi " + id)

      if (id === "right") {
        this.props.setNextPage()
      } else if (id === "left") {
        this.props.setPreviousPage()
      } else {
        this.props.setPage(id);
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
            <FontAwesomeIcon className="arrow" id="left" onClick={handlePage(this.id)} icon={faArrowLeft} />
            {this.props.pageNumbers.map(id => {
              return (
                <ButtonGroup key={id}>
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
    page: state.page,
    pageNumbers: state.pageNumbers
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
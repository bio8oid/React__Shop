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
    
    console.log('pageSet 1 '+pageSet)
    // console.log(pageNumbers)
    // console.log(pageNumbers.length)
    // console.log(pageNumbers[pageNumbers.length - 1])


    const addLeftArrow = () => document.getElementById('left').classList.remove('hide');
    const removeLeftArrow = () => document.getElementById('left').classList.add('hide');
    const addRightArrow = () => document.getElementById('right').classList.remove('hide');
    const removeRightArrow = () => document.getElementById('right').classList.add('hide');

   
// const startList = (pageSet === 1);
  
    // if (paginatorData === 1) {
    //   leftArrow();
    // }

    // const arrowHandler = () => {
    //   if (pageNumbers.length === 1) {
    //     leftArrow();
    //     rightArrow();
    //   }
    // }

    const handlePage = value => e => {
      const id = e.target.id;
    console.log(pageNumbers[pageNumbers.length - 1])
      console.log('pageSet 2 ' + pageSet)
      console.log("ajdi "+id)
      console.log("value before "+value)

      if (value >= 1 && value <= pageNumbers[pageNumbers.length - 1]) {
        console.log("targiet ajdi " + e.target.id)
        console.log("value "+value)
        this.props.setPage(id);
      }


      // console.log(e.target)

// const add =()=> {

//   if (pageNumbers[pageNumbers.length - 1]) {
//    removeRightArrow();
//  }
// if (pageSet !== pageNumbers[pageNumbers.length - 1]) {
//      addRightArrow();
//    }
  
// }
   
      // if (pageSet === 1) {
      //   removeLeftArrow();
      // }
      // if (pageSet !== 1) {
      //   addLeftArrow();
      // }
    //   const removeBoth = () => {
    //  removeLeftArrow();
    //     removeRightArrow();
    //   }
 if (value === pageNumbers[pageNumbers.length - 1]) {
        removeRightArrow();
      }
      if (value === 1) {
        removeLeftArrow();
      }
     
 if (pageNumbers.length !== 1){
      addLeftArrow();
      addRightArrow();
    }
      // return (
        
      //   (value === 1) ? this.props.setPage1() :
      //     (value === 2) ? this.props.setPage2() :
      //       (value === 3) ? this.props.setPage3() :
      //         (value === 4) ? this.props.setPage4() :
      //           (value === 5) ? this.props.setPage5() :
      //             (e.target.id === "left") ? this.props.setPreviousPage() :
      //               (e.target.id === "right") ? this.props.setNextPage() : false
      // )

    }
    
    if (pageNumbers.length === 1) {
      removeLeftArrow();
      removeRightArrow();
    }
  
   

    return (

      <Pulse cascade>
        <div className="products-container">

          {this.paginator(dataset, pageSet).data.map((item) => (
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
            {pageNumbers.map(id => {
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
    page: state.page
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
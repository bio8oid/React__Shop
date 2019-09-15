import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions';
//import Pulse from 'react-reveal/Pulse';
//import { Link } from 'react-router-dom'
//import Data from "react-data-pagination";
//import Data from "./Data";
//import getPageData from "react-data-pagination";
import './ProductsList.scss'



class Paginator extends Component {

  kutas = value => {
    return(value);
  }

  
  Paginator = (items, page, per_page) => {
    
    var page = page || 1,
    per_page = per_page || 6,
    offset = (page - 1) * per_page,
    dataset = this.props.items,

        paginatedItems = dataset.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(dataset.length / per_page);

      return {
        page: page,
        per_page: per_page,
        pre_page: page - 1 ? page - 1 : null,
        next_page: (total_pages > page) ? page + 1 : null,
        total: items.length,
        total_pages: total_pages,
        data: paginatedItems
      };
    }

    render() {
      const dataset = this.props.items;
      const paginatorData = this.Paginator(dataset);

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(dataset.length / paginatorData.per_page); i++) {
        pageNumbers.push(i);
      }

    const renderPageNumbers = pageNumbers.map(id => {
      return (
        <div>
          <button key={id} onClick={() => this.kutas(id)}>{id}</button>
        </div>
      );
    });

    console.log(this.Paginator(this.props.items, ));
    console.log({renderPageNumbers});

    console.log(this.kutas());
    return (
          <div>
            {renderPageNumbers}
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator)
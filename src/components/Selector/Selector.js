import React from "react";
import { connect } from 'react-redux'
import { sortedByPriceAsc, sortedByPriceDesc, sortedByNameAsc, sortedByNameDesc } from '../../actions/actions'
import { Link } from 'react-router-dom'

//import { getPageData } from '../../../node_modules/react-data-pagination/src/Data.js'
//import Fragment from '../../../node_modules/react-data-pagination/src/Data.js'
import "./Selector.css";
//import  getPageData from "react-data-pagination";

export class Selector extends React.Component {
   
  sortedByPriceAsc = () => {
    this.props.sortedByPriceAsc();
  }

  sortedByPriceDesc = () => {
    this.props.sortedByPriceDesc();
  }

  sortedByNameAsc = () => {
    this.props.sortedByNameAsc();
  }

  sortedByNameDesc = () => {
    this.props.sortedByNameDesc();
  }

  refresh = () => {
    this.setState({ items: this.props.sortedList });
    alert('works')
  }

  render() {

    return (
      <div className="selector-wrapper">
        <Link to="/"><span className="btn-floating " onClick={() => { this.sortedByPriceAsc() }}><i className="material-icons">Price Asc</i></span></Link>

        <Link to="/"><span className="btn-floating " onClick={() => { this.sortedByPriceDesc() }}><i className="material-icons">Price Desc</i></span></Link>

        <Link to="/"><span className="btn-floating " onClick={() => { this.sortedByNameAsc() }}><i className="material-icons">Name Asc</i></span></Link>

        <Link to="/"><span className="btn-floating " onClick={() => { this.sortedByNameDesc() }}><i className="material-icons">Name Desc</i></span></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.sortedList
  }
}

const mapDispatchToProps = dispatch => {

  return {
    sortedByPriceAsc: () => { dispatch(sortedByPriceAsc()) },
    sortedByPriceDesc: () => { dispatch(sortedByPriceDesc()) },
    sortedByNameAsc: () => { dispatch(sortedByNameAsc()) },
    sortedByNameDesc: () => { dispatch(sortedByNameDesc()) }
    //getPageData: (props) => { dispatch(getPageData()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)
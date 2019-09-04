import React from "react";
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
/*
import { sortedByPriceAsc, 
  sortedByPriceDesc, 
  sortedByNameAsc, 
  sortedByNameDesc,
  filteredByTypeRisers,
  filteredByTypeLimbs,
  filteredByTypeTabs,
  filteredByTypeStabilizers,
  filteredByTypeArrows,
  filteredByTypeSights,
  filteredByTypeStands,
  filteredByTypeArmguards,
  resetFilters,
  filteredByTypeRisersRemove
 } 
 */

import { Link } from 'react-router-dom'
import "./Selector.scss";

//import { getPageData } from '../../../node_modules/react-data-pagination/src/Data.js'
//import Fragment from '../../../node_modules/react-data-pagination/src/Data.js'
//import  getPageData from "react-data-pagination";

class Selector extends React.Component {
  
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


  filteredByTypeRisers = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeRisers();
    }else{
      this.props.risersRemoved();
    }
  }
  
        filteredByTypeLimbs = (e) => {
          if(e.target.checked) {
            this.props.filteredByTypeLimbs();
                }else{
            this.props.limbsRemoved();
    
          }
        }

        filteredByTypeTabs = (e) => {
          if(e.target.checked) {
      this.props.filteredByTypeTabs();
    }else{
      this.props.tabsRemoved();
    }
  }
  
  filteredByTypeStabilizers = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeStabilizers();
    }else{
      this.props.stabilizersRemoved();
    }
  }
  
  filteredByTypeArrows = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeArrows();
    }else{
      this.props.arrowsRemoved();
    }
  }

  filteredByTypeSights = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeSights();
    }else{
      this.props.sightsRemoved();
    }
  }

  filteredByTypeStands = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeStands();
    }else{
      this.props.standsRemoved();
    }
  }

  filteredByTypeArmguards = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeArmguards();
    }else{
      this.props.armguardsRemoved();
    }
  }
  
  
  resetFilters = () => {
    const inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; ++i) { 
      inputs[i].checked = false;
    }
    this.props.resetFilters();
    console.log(inputs)
  }
  
  render() {
    
    return (
      <div className="selector-wrapper">
        <Link to="/home" className="selector-btn btn" onClick={() => { this.sortedByPriceAsc() }}>price asc</Link>

        <Link to="/home"><button className="selector-btn btn" onClick={() => { this.sortedByPriceDesc() }}>Price Desc</button></Link>

        <Link to="/home"><button className="selector-btn btn" onClick={() => { this.sortedByNameAsc() }}>Name Asc</button></Link>

        <Link to="/home"><button className="selector-btn btn" onClick={() => { this.sortedByNameDesc() }}>Name Desc</button></Link>

        <Link to="/home"><button className="selector-btn btn" onClick={() => { this.resetFilters() }}>Reset Filters</button></Link>

        <form>

        <p><input type="checkbox"  onChange={this.filteredByTypeRisers} />Risers</p>
        <p><input type="checkbox" onChange={this.filteredByTypeLimbs} />Limbs</p>
        <p><input type="checkbox" onChange={this.filteredByTypeTabs} />Finger Tabs</p>
        <p><input type="checkbox" onChange={this.filteredByTypeStabilizers} />Stabilizers</p>
        <p><input type="checkbox" onChange={this.filteredByTypeArrows} />Arrows</p>
        <p><input type="checkbox" onChange={this.filteredByTypeSights} />Sights</p>
        <p><input type="checkbox" onChange={this.filteredByTypeStands} />Stands</p>
        <p><input type="checkbox" onChange={this.filteredByTypeArmguards} />Armguards</p>

      </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps =  {

  ...actions
/*
  return {
    sortedByPriceAsc: () => { dispatch(sortedByPriceAsc()) },
    sortedByPriceDesc: () => { dispatch(sortedByPriceDesc()) },
    sortedByNameAsc: () => { dispatch(sortedByNameAsc()) },
    sortedByNameDesc: () => { dispatch(sortedByNameDesc()) },
    filteredByTypeRisers: () => { dispatch(filteredByTypeRisers()) },
    filteredByTypeRisersRemove: () => { dispatch(filteredByTypeRisersRemove()) },
    filteredByTypeLimbs: () => { dispatch(filteredByTypeLimbs()) },
    filteredByTypeTabs: () => { dispatch(filteredByTypeTabs()) },
    filteredByTypeStabilizers: () => { dispatch(filteredByTypeStabilizers()) },
    filteredByTypeArrows: () => { dispatch(filteredByTypeArrows()) },
    filteredByTypeSights: () => { dispatch(filteredByTypeSights()) },
    filteredByTypeStands: () => { dispatch(filteredByTypeStands()) },
    filteredByTypeArmguards: () => { dispatch(filteredByTypeArmguards()) },
    resetFilters: () => { dispatch(resetFilters()) },
    //getPageData: (props) => { dispatch(getPageData()) }
  }*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)
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


  filteredByTypeRisers = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeRisers();
      this.props.checkboxUp();
    }else{
      this.props.risersRemoved();
      this.props.checkboxDown();
    }
  }
  
        filteredByTypeLimbs = (e) => {
          if(e.target.checked) {
            this.props.filteredByTypeLimbs();
            this.props.checkboxUp();
          }else{
            this.props.limbsRemoved();
            this.props.checkboxDown();
          }
        }

        filteredByTypeTabs = (e) => {
          if(e.target.checked) {
      this.props.filteredByTypeTabs();
      this.props.checkboxUp();
    }else{
      this.props.tabsRemoved();
      this.props.checkboxDown();
    }
  }
  
  filteredByTypeStabilizers = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeStabilizers();
      this.props.checkboxUp();
    }else{
      this.props.stabilizersRemoved();
      this.props.checkboxDown();
    }
  }
  
  filteredByTypeArrows = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeArrows();
      this.props.checkboxUp();
    }else{
      this.props.arrowsRemoved();
      this.props.checkboxDown();
    }
  }

  filteredByTypeSights = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeSights();
      this.props.checkboxUp();
    }else{
      this.props.sightsRemoved();
      this.props.checkboxDown();
    }
  }

  filteredByTypeStands = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeStands();
      this.props.checkboxUp();
    }else{
      this.props.standsRemoved();
      this.props.checkboxDown();
    }
  }

  filteredByTypeArmguards = (e) => {
    if(e.target.checked) {
      this.props.filteredByTypeArmguards();
      this.props.checkboxUp();
    }else{
      this.props.armguardsRemoved();
      this.props.checkboxDown();
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
        <Link to="/home"><button className="selector-btn " onClick={() => { this.sortedByPriceAsc() }}>Price Asc</button></Link>

        <Link to="/home"><button className="selector-btn " onClick={() => { this.sortedByPriceDesc() }}>Price Desc</button></Link>

        <Link to="/home"><button className="selector-btn " onClick={() => { this.sortedByNameAsc() }}>Name Asc</button></Link>

        <Link to="/home"><button className="selector-btn " onClick={() => { this.sortedByNameDesc() }}>Name Desc</button></Link>

        <Link to="/home"><button className="selector-btn " onClick={() => { this.resetFilters() }}>Reset Filters</button></Link>

        <form>

        <div className="custom-control custom-radio custom-control-inline">
  <input onChange={this.filteredByTypeRisers} type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
  <label className="custom-control-label" for="customRadioInline1">Risers</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
  <input onChange={this.filteredByTypeLimbs} type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
  <label className="custom-control-label" for="customRadioInline2">Limbs</label>
</div>


        <p><input type="checkbox" name="checkfield" id="g01-01"  />TEST</p>



        <p><input className='input' type="checkbox"  onChange={this.filteredByTypeRisers} />Risers</p>


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
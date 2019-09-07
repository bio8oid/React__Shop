import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { NavLink } from 'react-router-dom';
import "./Selector.scss";

//import { getPageData } from '../../../node_modules/react-data-pagination/src/Data.js'
//import Fragment from '../../../node_modules/react-data-pagination/src/Data.js'
//import  getPageData from "react-data-pagination";

class Selector extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      console.log(this.props.items);
    }
  }

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
    if (e.target.checked) {
      this.props.filteredByTypeRisers();
    } else {
      this.props.risersRemoved();
    }
  }

  filteredByTypeLimbs = (e) => {
    if (e.target.checked) {
      this.props.filteredByTypeLimbs();
    } else {
      this.props.limbsRemoved();
    }
  }

  filteredByTypeTabs = (e) => {
    if (e.target.checked) {
      this.props.filteredByTypeTabs();
    } else {
      this.props.tabsRemoved();
    }
  }

  filteredByTypeStabilizers = (e) => {
    if (e.target.checked) {
      this.props.filteredByTypeStabilizers();
    } else {
      this.props.stabilizersRemoved();
    }
  }

  filteredByTypeArrows = (e) => {
    if (e.target.checked) {
      this.props.filteredByTypeArrows();
    } else {
      this.props.arrowsRemoved();
    }
  }

  filteredByTypeSights = (e) => {
    if (e.target.checked) {
      this.props.filteredByTypeSights();
    } else {
      this.props.sightsRemoved();
    }
  }

  filteredByTypeStands = (e) => {
    if (e.target.checked) {
      this.props.filteredByTypeStands();
    } else {
      this.props.standsRemoved();
    }
  }

  filteredByTypeArmguards = (e) => {
    if (e.target.checked) {
      this.props.filteredByTypeArmguards();
      console.log(e.target.checked)
    } else {
      this.props.armguardsRemoved();
    }
  }

  resetFilters = () => {
    const inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; ++i) {
      inputs[i].checked = false;
    }
    this.props.resetFilters();
    //console.log(inputs)
  }

  render() {

    return (
      <div className="selector-component">

        <div className="selector-wrapper">
          <NavLink activeClassName="active" style={{ textDecoration: 'none' }} to="/" className="selector-btn menu" onClick={() => { this.sortedByPriceAsc() }}>price asc</NavLink>

          <NavLink activeClassName="active" style={{ textDecoration: 'none' }} to="/" className="selector-btn menu" onClick={() => { this.sortedByPriceDesc() }}>Price Desc</NavLink>

          <NavLink activeClassName="active" style={{ textDecoration: 'none' }} to="/" className="selector-btn menu" onClick={() => { this.sortedByNameAsc() }}>Name Asc</NavLink>

          <NavLink activeClassName="active" style={{ textDecoration: 'none' }} to="/" className="selector-btn menu" onClick={() => { this.sortedByNameDesc() }}>Name Desc</NavLink>

          <NavLink activeClassName="active" style={{ textDecoration: 'none' }} to="/" className="selector-btn menu" onClick={() => { this.resetFilters() }}>Reset Filters</NavLink>
        </div>

        <div className='line'></div>

        <form className="input-group menu">

          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeRisers} />
            <label>Risers</label>
          </div>
          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeLimbs} />
            <label>Limbs</label>
          </div>
          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeTabs} />
            <label>Finger Tabs</label>
          </div>
          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeStabilizers} />
            <label>Stabilizers</label>
          </div>
          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeArrows} />
            <label>Arrows</label>
          </div>
          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeSights} />
            <label>Sights</label>
          </div>
          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeStands} />
            <label>Stands</label>
          </div>
          <div className="input-item">
            <input type="checkbox" onChange={this.filteredByTypeArmguards} />
            <label>Armguards</label>
          </div>

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

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)
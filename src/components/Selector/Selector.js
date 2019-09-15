import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { NavLink } from 'react-router-dom';
import "./Selector.scss";

class Selector extends React.Component {

  handleSort = (e) => {
    const id = e.target.id

    return (
      (id === 'PriceAsc') ? this.props.sortedByPriceAsc() :
        (id === 'PriceDesc') ? this.props.sortedByPriceDesc() :
          (id === 'NameAsc') ? this.props.sortedByNameAsc() :
            (id === 'NameDesc') ? this.props.sortedByNameDesc() :
              (id === 'resetFilters') ? this.reset() : false
    )
  }

  handleFilter = (e) => {
    const id = e.target.id
    const checked = e.target.checked

    if (id === "risers") { (checked) ? this.props.filteredByTypeRisers() : this.props.risersRemoved(); };
    if (id === "limbs") { (checked) ? this.props.filteredByTypeLimbs() : this.props.limbsRemoved(); };
    if (id === "finger tabs") { (checked) ? this.props.filteredByTypeTabs() : this.props.tabsRemoved(); }
    if (id === "stabilizers") { (checked) ? this.props.filteredByTypeStabilizers() : this.props.stabilizersRemoved(); }
    if (id === "arrows") { (checked) ? this.props.filteredByTypeArrows() : this.props.arrowsRemoved(); }
    if (id === "sights") { (checked) ? this.props.filteredByTypeSights() : this.props.sightsRemoved(); }
    if (id === "stands") { (checked) ? this.props.filteredByTypeStands() : this.props.standsRemoved(); }
    if (id === "armguards") { (checked) ? this.props.filteredByTypeArmguards() : this.props.armguardsRemoved(); }

    this.props.setPage1();
  }

  reset = () => {
    const inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; ++i) {
      inputs[i].checked = false;
    }
    this.props.resetFilters();
  }

  render() {

    const selectData = [
      { id: "PriceAsc", name: "price asc" },
      { id: "PriceDesc", name: "price desc" },
      { id: "NameAsc", name: "name asc" },
      { id: "NameDesc", name: "name desc" },
      { id: "resetFilters", name: "reset filters" }
    ]

    const filterData = [
      { id: "risers" },
      { id: "limbs" },
      { id: "finger tabs" },
      { id: "stabilizers" },
      { id: "arrows" },
      { id: "sights" },
      { id: "stands" },
      { id: "armguards" }
    ]

    return (
      <div className="selector-component">

        {selectData.map(item => (
          <div key={item.id} className="selector-wrapper">
            <NavLink  id={item.id} activeClassName="active" style={{ textDecoration: 'none' }} to="/" className="selector-btn menu" onClick={(id) => { this.handleSort(id) }}>{item.name}</NavLink>
          </div>))}

        <div className='line'></div>

        <form className="input-group menu">
          {filterData.map(item => (
            <div key={item.id} className="input-item">
              <input  id={item.id} type="checkbox" onChange={this.handleFilter} />
              <label>{item.id}</label>
            </div>))}
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
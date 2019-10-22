import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { NavLink } from "react-router-dom";
import "./Selector.scss";

class Selector extends React.Component {
  handleSort = e => {
    const id = e.target.id;

    if (id === "PriceAsc") {
      this.props.sortedByPriceAsc();
    }
    if (id === "PriceDesc") {
      this.props.sortedByPriceDesc();
    }
    if (id === "NameAsc") {
      this.props.sortedByNameAsc();
    }
    if (id === "NameDesc") {
      this.props.sortedByNameDesc();
    }
    if (id === "resetFilters") {
      this.reset();
    }
    return false;
  };

  handleFilter = e => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (id === "risers") {
      if (checked) {
        return this.props.filteredByTypeRisers();
      }
      return this.props.risersRemoved();
    }
    if (id === "limbs") {
      if (checked) {
        return this.props.filteredByTypeLimbs();
      }
      return this.props.limbsRemoved();
    }
    if (id === "finger tabs") {
      if (checked) {
        return this.props.filteredByTypeTabs();
      }
      return this.props.tabsRemoved();
    }
    if (id === "stabilizers") {
      if (checked) {
        return this.props.filteredByTypeStabilizers();
      }
      return this.props.stabilizersRemoved();
    }
    if (id === "arrows") {
      if (checked) {
        return this.props.filteredByTypeArrows();
      }
      return this.props.arrowsRemoved();
    }
    if (id === "sights") {
      if (checked) {
        return this.props.filteredByTypeSights();
      }
      return this.props.sightsRemoved();
    }
    if (id === "stands") {
      if (checked) {
        return this.props.filteredByTypeStands();
      }
      return this.props.standsRemoved();
    }
    if (id === "armguards") {
      if (checked) {
        return this.props.filteredByTypeArmguards();
      }
      return this.props.armguardsRemoved();
    }

    this.props.setPage1();
  };

  reset = () => {
    const inputs = document.getElementsByTagName("input");
    for (var input of inputs) {
      input.checked = false;
    }
    this.props.resetFilters();
  };

  render() {
    const selectData = [
      { id: "PriceAsc", name: "price asc" },
      { id: "PriceDesc", name: "price desc" },
      { id: "NameAsc", name: "name asc" },
      { id: "NameDesc", name: "name desc" },
      { id: "resetFilters", name: "reset filters" }
    ];

    const filterData = [
      { id: "risers" },
      { id: "limbs" },
      { id: "finger tabs" },
      { id: "stabilizers" },
      { id: "arrows" },
      { id: "sights" },
      { id: "stands" },
      { id: "armguards" }
    ];

    return (
      <div className="selector-component">
        {selectData.map(item => (
          <div key={item.id} className="selector-wrapper">
            <NavLink
              id={item.id}
              activeClassName="active"
              style={{ textDecoration: "none" }}
              to="/"
              className="selector-btn menu"
              onClick={id => {
                this.handleSort(id);
              }}
            >
              {item.name}
            </NavLink>
          </div>
        ))}

        <div className="line"></div>

        <form className="input-group menu">
          {filterData.map(item => (
            <div key={item.id} className="input-item">
              <input
                id={item.id}
                type="checkbox"
                onChange={this.handleFilter}
              />
              <label htmlFor={item.id}>{item.id}</label>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
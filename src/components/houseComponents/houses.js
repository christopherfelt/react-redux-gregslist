import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHouses } from "../../actions/houses/houseActions";
import House from "./house";
import NewItemForm from "../forms/newItem";

class Houses extends Component {
  componentDidMount() {
    this.props.getHouses();
  }

  componentWillReceiveProps(nextProps) {
    this.props.houses.unshift(nextProps.newHouse);
  }

  render() {
    const houseItems = this.props.houses.map((house) => (
      <div key={house.id} className="card">
        <House house={house} />
      </div>
    ));
    return (
      <div className="card-columns">
        <NewItemForm itemType={"house"} />
        {houseItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  houses: state.houses.houses,
  newHouse: state.houses.house,
});

export default connect(mapStateToProps, { getHouses })(Houses);

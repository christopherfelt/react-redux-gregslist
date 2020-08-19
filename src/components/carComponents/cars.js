import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewItemForm from "../forms/newItem";
import { getCars } from "../../actions/cars/carActions";
import Car from "./car";

class Cars extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newCar) {
      this.props.cars.unshift(nextProps.newCar);
    }
  }

  render() {
    const carItems = this.props.cars.map((car) => (
      <div key={car.id} className="card">
        <Car car={car} />
      </div>
    ));
    return (
      <div className="card-columns">
        <NewItemForm itemType={"car"} />
        {carItems}
      </div>
    );
  }
}

Cars.propTypes = {
  getCars: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired,
  newCar: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
  newCar: state.cars.car,
});

export default connect(mapStateToProps, { getCars })(Cars);

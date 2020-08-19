import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCars } from "../../actions/cars/carActions";

class Cars extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    const carItems = this.props.cars.map((car) => (
      <div key={car.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{car.title}</h5>
          <p className="card-text">{car.description}</p>
          <h5 className="card-title">{car.price}</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>Hello from car</h1>
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

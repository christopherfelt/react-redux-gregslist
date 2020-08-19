import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCar } from "../../actions/cars/carActions";

class Car extends Component {
  constructor(props) {
    super(props);
    this.deleteCar = this.deleteCar.bind(this);
  }
  deleteCar(e) {
    this.props.deleteCar(this.props.car.id);
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <img src={this.props.car.imgUrl} className="img-fluid" />
          <h5 className="card-title">{this.props.car.title}</h5>
          <p className="card-text">{this.props.car.description}</p>
          <h5 className="card-title">{this.props.car.price}</h5>
          <button className="btn btn-danger" onClick={this.deleteCar}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteCar })(Car);

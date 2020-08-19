import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteHouse } from "../../actions/houses/houseActions";

class House extends Component {
  constructor(props) {
    super(props);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  deleteHouse(e) {
    this.props.deleteHouse(this.props.house.id);
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <img src={this.props.house.imgUrl} className="img-fluid" />
          <h5 className="card-title">{this.props.house.title}</h5>
          <p className="card-text">{this.props.house.description}</p>
          <h5 className="card-title">{this.props.house.price}</h5>
          <button className="btn btn-danger" onClick={this.deleteHouse}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteHouse })(House);

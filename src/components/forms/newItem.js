import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCar } from "../../actions/cars/carActions";
import { addHouse } from "../../actions/houses/houseActions";
import { addJob } from "../../actions/jobs/jobActions";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: "",
      location: "",
      hours: "",
      rate: "",
      imgUrl: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.props.itemType === "car") {
      const newCar = {
        title: this.state.title,
        description: this.state.description,
        price: parseFloat(this.state.price),
        imgUrl: this.state.imgUrl,
      };
      this.props.addCar(newCar);
    } else if (this.props.itemType === "house") {
      const newHouse = {
        title: this.state.title,
        description: this.state.description,
        price: parseFloat(this.state.price),
        location: this.state.location,
        imgUrl: this.state.imgUrl,
      };
      this.props.addHouse(newHouse);
    } else if (this.props.itemType === "job") {
      const newJob = {
        title: this.state.title,
        description: this.state.description,
        hours: parseInt(this.state.hours),
        rate: parseFloat(this.state.rate),
        imgUrl: this.state.imgUrl,
      };
      this.props.addJob(newJob);
    }
  }

  render() {
    return (
      <div className="card p-1">
        <h5>Add {this.props.itemType} </h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control mt-1"
              onChange={this.onChange}
              value={this.state.title}
              placeholder="title"
            />
            <input
              type="text"
              name="description"
              className="form-control mt-1"
              onChange={this.onChange}
              value={this.state.description}
              placeholder="description"
            />
            {this.props.itemType === "car" ||
            this.props.itemType === "house" ? (
              <input
                type="text"
                name="price"
                onChange={this.onChange}
                value={this.state.price}
                placeholder="price"
                className="form-control mt-1"
              />
            ) : (
              ""
            )}
            {this.props.itemType === "house" ? (
              <input
                type="text"
                name="location"
                onChange={this.onChange}
                value={this.state.location}
                placeholder="location"
                className="form-control mt-1"
              />
            ) : (
              ""
            )}
            {this.props.itemType === "job" ? (
              <input
                type="number"
                name="hours"
                onChange={this.onChange}
                value={this.state.hours}
                placeholder="hours"
                className="form-control mt-1"
              />
            ) : (
              ""
            )}
            {this.props.itemType === "job" ? (
              <input
                type="number"
                name="rate"
                onChange={this.onChange}
                value={this.state.rate}
                placeholder="rate"
                className="form-control mt-1"
              />
            ) : (
              ""
            )}
            <input
              type="text"
              name="imgUrl"
              onChange={this.onChange}
              value={this.state.imgUrl}
              className="form-control mt-1"
              placeholder="image url"
            />

            <input
              type="submit"
              value="submit"
              className="btn btn-primary mt-1"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCar, addHouse })(NewItem);

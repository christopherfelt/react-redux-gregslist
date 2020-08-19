import React, { Component } from "react";
import Cars from "../carComponents/cars";

export default class home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-8 cards-column">
              <Cars />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteJob } from "../../actions/jobs/jobActions";

class Job extends Component {
  constructor(props) {
    super(props);
    this.deleteJob = this.deleteJob.bind(this);
  }
  deleteJob(e) {
    this.props.deleteJob(this.props.job.id);
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <img src={this.props.job.imgUrl} className="img-fluid" />
          <h5 className="card-title">{this.props.job.title}</h5>
          <p className="card-text">{this.props.job.description}</p>
          <h5 className="card-title">{this.props.job.price}</h5>
          <button className="btn btn-danger" onClick={this.deleteJob}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteJob })(Job);

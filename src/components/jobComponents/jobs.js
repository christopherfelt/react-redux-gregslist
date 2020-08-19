import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewItemForm from "../forms/newItem";

import { getJobs } from "../../actions/jobs/jobActions";
import Job from "./job";

class Jobs extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newJob) {
      this.props.jobs.unshift(nextProps.newJob);
    }
  }

  render() {
    const jobItems = this.props.jobs.map((job) => (
      <div key={job.id} className="card">
        <Job job={job} />
      </div>
    ));
    return (
      <div className="card-columns">
        <NewItemForm itemType={"job"} />
        {jobItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  newJob: state.jobs.job,
});

export default connect(mapStateToProps, { getJobs })(Jobs);

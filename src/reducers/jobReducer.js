import { GET_JOBS, NEW_JOB, DELETE_JOB } from "../actions/jobs/types";

const initialState = {
  jobs: [],
  job: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case NEW_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload.id),
      };
    default:
      return state;
  }
}

import { GET_JOBS, NEW_JOB, DELETE_JOB } from "./types";
import axios from "axios";

let api = axios.create({
  baseURL: "https://localhost:5001/api/jobs",
  headers: {
    "Content-type": "application/json",
  },
});

export const getJobs = () => (dispatch) => {
  return api.get("").then((res) => {
    dispatch({ type: GET_JOBS, payload: res.data });
  });
};

export const addJob = (jobData) => (dispatch) => {
  return api.post("", jobData).then((res) => {
    dispatch({ type: NEW_JOB, payload: res.data });
  });
};

export const deleteJob = (jobId) => (dispatch) => {
  return api.delete("/" + jobId).then((res) => {
    dispatch({ type: DELETE_JOB, payload: res.data });
  });
};

import { GET_CARS, NEW_CAR } from "./types";
import axios from "axios";

let api = axios.create({
  baseURL: "https://localhost:5001/api/cars",
  headers: {
    "Content-type": "application/json",
  },
});

export const getCars = () => (dispatch) => {
  return api.get("").then((res) => {
    dispatch({ type: GET_CARS, payload: res.data });
  });
};

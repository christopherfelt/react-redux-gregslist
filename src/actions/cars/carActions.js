import { GET_CARS, NEW_CAR, DELETE_CAR } from "./types";
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

export const addCar = (carData) => (dispatch) => {
  return api.post("", carData).then((res) => {
    dispatch({ type: NEW_CAR, payload: res.data });
  });
};

export const deleteCar = (carId) => (dispatch) => {
  return api.delete("/" + carId).then((res) => {
    dispatch({ type: DELETE_CAR, payload: res.data });
  });
};

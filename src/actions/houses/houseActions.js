import { GET_HOUSES, NEW_HOUSE, DELETE_HOUSE } from "./types";
import axios from "axios";

let api = axios.create({
  baseURL: "https://localhost:5001/api/houses",
  headers: {
    "Content-type": "application/json",
  },
});

export const getHouses = () => (dispatch) => {
  return api.get("").then((res) => {
    dispatch({ type: GET_HOUSES, payload: res.data });
  });
};

export const addHouse = (houseData) => (dispatch) => {
  return api.post("", houseData).then((res) => {
    dispatch({ type: NEW_HOUSE, payload: res.data });
  });
};

export const deleteHouse = (houseId) => (dispatch) => {
  return api.delete("/" + houseId).then((res) => {
    dispatch({ type: DELETE_HOUSE, payload: res.data });
  });
};

import { GET_CARS, NEW_CAR } from "../actions/cars/types";

const initialState = {
  cars: [],
  car: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
}

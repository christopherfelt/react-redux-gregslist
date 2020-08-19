import { GET_CARS, NEW_CAR, DELETE_CAR } from "../actions/cars/types";

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
    case NEW_CAR:
      return {
        ...state,
        car: action.payload,
      };
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.id),
      };
    default:
      return state;
  }
}

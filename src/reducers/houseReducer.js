import { GET_HOUSES, NEW_HOUSE, DELETE_HOUSE } from "../actions/houses/types";

const initialState = {
  houses: [],
  house: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOUSES:
      return {
        ...state,
        houses: action.payload,
      };
    case NEW_HOUSE:
      return {
        ...state,
        house: action.payload,
      };
    case DELETE_HOUSE:
      return {
        ...state,
        houses: state.houses.filter((house) => house.id !== action.payload.id),
      };
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import carReducer from "./carReducer";
import houseReducer from "./houseReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
  cars: carReducer,
  houses: houseReducer,
  jobs: jobReducer,
});

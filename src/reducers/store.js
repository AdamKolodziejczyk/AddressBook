import { createStore, combineReducers, applyMiddleware } from "redux"
import math from "./mathReducer";
import user from "./userReducer";
import logger from "redux-logger";

export default createStore(
  combineReducers({math, user}),
  {},
  applyMiddleware(logger)
);
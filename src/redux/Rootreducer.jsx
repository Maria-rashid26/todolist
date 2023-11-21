import { combineReducers } from "@reduxjs/toolkit";
import Operationsreducers from "./redux/todoapp/reducers/Operationsreducers";

export const Rootreducer = combineReducers({
  Operationsreducers,
});

export default Rootreducer;

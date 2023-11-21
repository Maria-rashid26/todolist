import { createStore } from "@reduxjs/toolkit";
import Rootreducer from "../Rootreducer";

const Store = createStore(
  Rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;

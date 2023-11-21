import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX } from "../actions/Index";

const initialState = [];
const Operationsreducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_CHECKBOX:
      let array = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        array.push(item);
      });
      return array;
    default:
      return state;
  }
};

export default Operationsreducers;

import filterReducers from "./reducers/FiltersSlice";
import todoReducer from "./reducers/TodoSlice";
import { combineReducers } from "redux";
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducers(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filters: filterReducers,
  todoList: todoReducer,
});

export default rootReducer;

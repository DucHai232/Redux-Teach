// import { legacy_createStore as createStore, compose } from "redux";

// import rootReducer from "../redux/Reducer";
// /**
//  * rootReducer: reducer xử lý là một function dùng để cập nhật lại state,
//  * initValue: giá trị khởi tạo,
//  * enhancers: middleWare phổ biến như redux-saga hay redux-thunk
//  * Lúc mình sử dụng @reduxjs/toolkit thì reducer không cần sử dụng combineReducer nữa mà viết trực tiếp vào store luôn
//  * */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers());

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../redux/reducers/FiltersSlice";
import { todoSlice } from "../redux/reducers/TodoSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;

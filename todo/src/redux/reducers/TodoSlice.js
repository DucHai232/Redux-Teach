// const initState = [
//   {
//     id: 1,
//     name: "Learn Yoga",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "Learn React",
//     completed: true,
//     priority: "Low",
//   },
// ];

// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "ADD-TO-DO":
//       return [...state, action.payload];
//     case "CHECKED-COMPLETE":
//       return state.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoReducer;

//REDUX TOOLKIT

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      name: "Learn Yoga",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn React",
      completed: true,
      priority: "Low",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    checkedComplete: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});

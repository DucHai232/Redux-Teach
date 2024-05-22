// Redux core
// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filterReducers = (state = initState, action) => {
//   switch (action.type) {
//     case "SEARCH-FILTER":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "STATUS-FILTER":
//       return { ...state, status: action.payload };
//     case "PRIORITIES-FILTER":
//       return { ...state, priorities: action.payload };
//     default:
//       return state;
//   }
// };

// export default filterReducers;

//Reduxtoolkit
/**
 * name
 * */

import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilter: (state, action) => {
      //mutation
      state.search = action.payload;
    }, // => {type: 'filters/searchFilter}
    statusFilter: (state, action) => {
      state.status = action.payload;
    },
    priorityFilter: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

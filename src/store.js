// configureStore is like building the library
import { configureStore, createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
  name: "count",
  initialState: 10,
  reducers: {
    // the list of actions that the librarian takes
    increment: (state, action) => {
      // what does the librarian do when asked to increment?
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
  },
});

const store = configureStore({
  reducer: {
    count: countReducer.reducer,
  },
});

export default store;

const increment = countReducer.actions.increment;

const decrement = countReducer.actions.decrement;

export { countReducer, increment, decrement };

// configureStore is like building the library
import { configureStore, createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
  name: "count",
  initialState: 10,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
  },
});

const store = configureStore({
  reducer: {
    count: countReducer.reducer,
  },
});

export default store;

export { countReducer };

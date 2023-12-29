import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // other reducers
  },
});

export default store;

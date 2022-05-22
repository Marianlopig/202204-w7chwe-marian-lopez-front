import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
import usersReducer from "../features/usersSlice/usersSlice";

const store = configureStore({
  reducer: { auth: authReducer, users: usersReducer },
});

export default store;

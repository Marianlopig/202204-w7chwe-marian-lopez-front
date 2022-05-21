import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: (user, action) => {
      return { ...action.payload };
    },
    logout: (user) => ({}),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: (currentState, action) => {
      return { ...action.payload };
    },
    created: (currentState) => ({ ...currentState }),
    logout: (currentState) => ({}),
  },
});

export const {
  login: loginActionCreator,
  logout: logoutActionCreator,
  created: createdActionCreator,
} = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/reduxApi";

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")),
  userInfo: null,
  token: null,
  // isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.userInfo = {
            _id: payload._id,
            name: payload.name,
            email: payload.email,
            photo: payload.photo,
            vendor: payload.vendor,
          };
          state.token = payload.token;
          // state.isAuthenticated = true;
          state.error = null;
        }
      )
      .addMatcher(
        authApi.endpoints.registerUser.matchFulfilled,
        (state, { payload }) => {
          state.userInfo = {
            _id: payload._id,
            name: payload.name,
            email: payload.email,
            photo: payload.photo,
            vendor: payload.vendor,
          };
          state.token = payload.token;
          // state.isAuthenticated = true;
          state.error = null;
        }
      )
      .addMatcher(authApi.endpoints.loginUser.matchRejected, (state, action) => {
        state.error = action.error?.message || "Login failed";
      })
      .addMatcher(authApi.endpoints.registerUser.matchRejected, (state, action) => {
        state.error = action.error?.message || "Signup failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;















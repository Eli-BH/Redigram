import { createSlice } from "@reduxjs/toolkit";
import { navigate } from "../navigationRef";
import axios from "axios";

const initialState = {
  token: null,
  error: "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = JSON.stringify(payload.token);
      localStorage.setItem("token", payload.tokens);
    },
    signInFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payloads;
    },
  },
});

//export the actions
export const { signIn, signInFailure, signInSuccess } = authSlice.actions;

//export the selector
export const authSelector = (state) => state.auth;

//reducer
export default authSlice.reducer;

//thunks

export const register = (userData) => async (dispatch) => {
  dispatch(signIn());
  try {
    const { data } = await axios.post(
      "http://192.168.1.181:4000/api/auth/register",
      userData
    );

    dispatch(signInSuccess(data.token));
    navigate("mainFlow");
  } catch (error) {
    dispatch(signInFailure());
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(signIn());
  try {
    const { data } = await axios.post(
      "http://192.168.1.181:4000/api/auth/login",
      userData
    );
    navigate("mainFlow");

    dispatch(signInSuccess(data.token));
  } catch (error) {
    dispatch(signInFailure());
  }
};

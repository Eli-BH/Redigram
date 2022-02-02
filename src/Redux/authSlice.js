import { createSlice } from "@reduxjs/toolkit";
import { navigate } from "../navigationRef";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      state.token = payload;
    },
    signInFailure: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
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

export function register(userData) {
  return async (dispatch) => {
    dispatch(signIn());
    try {
      const { data } = await axios.post(
        "http://192.168.1.6:4000/api/auth/register",
        userData
      );

      dispatch(signInSuccess(data.token));
      await AsyncStorage.setItem("token", data.token);
      navigate("mainFlow");
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error));
    }
  };
}

export function login(userData) {
  return async (dispatch) => {
    console.log(userData);
    dispatch(signIn());

    try {
      console.log(userData);
      const { data } = await axios.post(
        "http://192.168.1.6:4000/api/auth/login",
        userData
      );
      await AsyncStorage.setItem("token", data.token);
      dispatch(signInSuccess(data.token));
      navigate("mainFlow");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
}

export function tryLocalLogin() {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      dispatch(signInSuccess(token));

      navigate("mainFlow");
    } else {
      navigate("Login");
    }
  };
}

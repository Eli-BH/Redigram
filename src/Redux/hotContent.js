import { createSlice } from "@reduxjs/toolkit";
import contentApi from "../api/content";

const initialState = {
  loading: false,
  error: null,
  content: {},
};

const hotContentSlice = createSlice({
  name: "hotContent",
  initialState,
  reducers: {
    getHot: (state) => {
      state.loading = true;
    },
    getHotSuccess: (state, { payload }) => {
      state.loading = false;
      state.content = payload;
    },
    getHotFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

//export the actions
export const { getHot, getHotSuccess, getHotFailure } = hotContentSlice.actions;

//export the selector
export const hotContentSelector = (state) => state.hotContent;

//reducer
export default hotContentSlice.reducer;

//thunks
export function getHotPosts() {
  return async (dispatch) => {
    dispatch(getHot());
    try {
      const { data } = await contentApi.get("/getHot");

      dispatch(getHotSuccess(data));
    } catch (error) {
      dispatch(getHotFailure(error.response.data));
    }
  };
}

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import hotContentReducer from "./hotContent";
export default configureStore({
  reducer: {
    auth: authReducer,
    hotContent: hotContentReducer,
  },
});

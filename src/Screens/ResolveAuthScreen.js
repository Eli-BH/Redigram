import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { tryLocalLogin } from "../Redux/authSlice";

const ResolveAuthScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tryLocalLogin());
  }, []);
  return null;
};

export default ResolveAuthScreen;

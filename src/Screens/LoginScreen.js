import { StyleSheet, View, Text } from "react-native";
import { authSelector, login } from "../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

const LoginScreen = ({ navigation }) => {
  const { error, loading, token } = useSelector(authSelector);
  const dispatch = useDispatch();

  console.log(token);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading</Text>
      ) : (
        <>
          <AuthForm
            header="Login to Redigram"
            errorMessage={error.message}
            btnTitle="Sign in"
            onSubmit={(data) => dispatch(login(data))}
          />
          <Spacer>
            <NavLink
              text="Don't have an account? Sign up here!"
              routeName={"Register"}
            />
          </Spacer>
        </>
      )}
    </View>
  );
};

export default LoginScreen;

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
});

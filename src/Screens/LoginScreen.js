import { StyleSheet, View } from "react-native";
import React from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const LoginScreen = ({ navigation }) => {
  const submit = () => {
    console.log("helle");
  };

  return (
    <View style={styles.container}>
      <AuthForm
        header="Login to Redigram"
        errorMessage=""
        btnTitle="Sign in"
        onSubmit={submit}
      />
      <NavLink
        text="Don't have an account? Sign up here!"
        routeName={"Register"}
      />
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
});

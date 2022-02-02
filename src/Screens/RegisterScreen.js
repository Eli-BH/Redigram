import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AuthForm
        header="Register to Redigram"
        errorMessage=""
        btnTitle="Sign Up"
        onSubmit={console.log("ds")}
      />
      <NavLink
        text="Already have an account? Sign in here!"
        routeName={"Login"}
      />
    </View>
  );
};

export default RegisterScreen;

RegisterScreen.navigationOptions = () => {
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

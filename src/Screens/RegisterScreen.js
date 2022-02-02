import { StyleSheet, Text, View } from "react-native";
import { authSelector, register } from "../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

const RegisterScreen = ({ navigation }) => {
  const { error, loading, token } = useSelector(authSelector);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {loading ? (
        <Text> Loading</Text>
      ) : (
        <>
          <AuthForm
            header="Register to Redigram"
            errorMessage={error}
            btnTitle="Sign Up"
            onSubmit={(data) => dispatch(register(data))}
          />
          <Spacer>
            <NavLink
              text="Already have an account? Sign in here!"
              routeName={"Login"}
            />
          </Spacer>
        </>
      )}
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

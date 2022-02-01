import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput placeholder="email" style={styles.input} />

      <Text style={styles.text}>Password</Text>
      <TextInput placeholder="password" secureTextEntry style={styles.input} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
  text: {
    fontSize: 14,
  },
  input: {
    backgroundColor: "red",
  },
});

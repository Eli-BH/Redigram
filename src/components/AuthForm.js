import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import Spacer from "./Spacer";

const AuthForm = ({ header, errorMessage, onSubmit, btnTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header} h3>
        {header}
      </Text>

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />

      <Spacer />

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      {errorMessage ? (
        <Spacer>
          <View style={styles.errorView}>
            <Spacer>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </Spacer>
          </View>
        </Spacer>
      ) : null}

      <Spacer>
        <Button
          title={btnTitle}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "bold",
  },
  errorView: {
    backgroundColor: "#faa",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
  },
  header: {
    margin: 35,
    marginBottom: 80,
  },
  container: {
    marginTop: 150,
  },
});

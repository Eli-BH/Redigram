import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";

import React from "react";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SettingsScreen from "./src/Screens/SettingsScreen";

//Redux store
import { Provider } from "react-redux";
import { store } from "./src/Redux";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Account: AccountScreen,
    Settings: SettingsScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default (
  <Provider store={store}>
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  </Provider>
);

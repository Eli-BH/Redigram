import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";
import { SafeAreaProvider } from "react-native-safe-area-context";

import React from "react";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SettingsScreen from "./src/Screens/SettingsScreen";
import AccountScreen from "./src/Screens/AccountScreen";

//Redux store
import { Provider } from "react-redux";
import store from "./src/Redux/store";

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

export default () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </SafeAreaProvider>
    </Provider>
  );
};

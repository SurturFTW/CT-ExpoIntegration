import React, { useEffect } from "react";
import { Alert, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as appUtils from "./app-utils";

// import * as Location from "expo-location";

// Import components
import RegistrationForm from "./components/Register";
import Dashboard from "./components/Dashboard";

import initializeCleverTapListeners from "./components/initializeListeners";

const CleverTap = require("clevertap-react-native");

const Stack = createNativeStackNavigator();

export default function App() {
  CleverTap.registerForPush();
  CleverTap.initializeInbox();

  Linking.addEventListener("url", appUtils._handleOpenUrl);
  Linking.getInitialURL()
    .then((url) => {
      if (url) {
        appUtils._handleOpenUrl({ url });
      }
    })
    .catch((err) => console.error("launch url error", err));

  // Check CleverTap deep link
  CleverTap.getInitialUrl((err, url) => {
    if (url) {
      appUtils._handleOpenUrl({ url }, "CleverTap");
    } else {
      console.log("No URL", err);
    }
  });

  // Use in your component
  useEffect(() => {
    initializeCleverTapListeners();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Register"
          component={RegistrationForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

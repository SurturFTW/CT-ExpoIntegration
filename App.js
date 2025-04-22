import React, { useEffect } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import * as Location from "expo-location";

// Import components
import RegistrationForm from "./components/Register";
import Dashboard from "./components/Dashboard";

const CleverTap = require("clevertap-react-native");

const Stack = createNativeStackNavigator();

export default function App() {
  CleverTap.registerForPush();
  CleverTap.initializeInbox();

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

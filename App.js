import React, { useEffect } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// For location and notifications permissions
import * as Location from "expo-location";
import * as Notifications from "expo-notifications";

// Import components
import RegistrationForm from "./components/Register";
import Dashboard from "./components/Dashboard";

const CleverTap = require("clevertap-react-native");

const Stack = createNativeStackNavigator();

export default function App() {
  CleverTap.registerForPush();
  CleverTap.initializeInbox();

  const requestPermissions = async () => {
    try {
      // Request location permissions
      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== "granted") {
        Alert.alert("Location permission denied");
      }

      // Request notifications permissions
      const { status: notificationsStatus } =
        await Notifications.requestPermissionsAsync();
      if (notificationsStatus !== "granted") {
        Alert.alert("Notifications permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermissions();
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

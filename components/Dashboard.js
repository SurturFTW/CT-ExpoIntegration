import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as appUtils from "../app-utils";
import Toast from "react-native-toast-message";

const Dashboard = ({ route }) => {
  const name = route?.params?.name || "Guest";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={appUtils.getCleverTap_id}
      >
        <Text style={styles.buttonText}>Get CleverTap ID</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={appUtils.handleNotification}
      >
        <Text style={styles.buttonText}>Push Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={appUtils.pushevent}>
        <Text style={styles.buttonText}>Push Event</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={appUtils.pushChargedEvent}
      >
        <Text style={styles.buttonText}>Charged Event</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={appUtils.show_appInbox}>
        <Text style={styles.buttonText}>App Inbox</Text>
      </TouchableOpacity>

      <View style={styles.horizontalButtons}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={appUtils.get_TotalMessageCount}
          >
            <Text style={styles.buttonText}>Total Messages</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={appUtils.get_UnreadMessageCount}
          >
            <Text style={styles.buttonText}>Unread Count</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  horizontalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Dashboard;

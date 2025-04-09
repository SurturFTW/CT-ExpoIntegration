import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Dashboard = ({ route }) => {
  const { identity } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {identity}</Text>

      <View style={styles.card}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
});

export default Dashboard;

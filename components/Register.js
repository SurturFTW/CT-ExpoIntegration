import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import CleverTap from "clevertap-react-native";

const Register = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    name: "",
    identity: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleInputChange = (key, value) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const showToast = (type, message) => {
    Toast.show({
      type: type, // 'success' | 'error' | 'info'
      text1: message,
      position: "bottom",
      visibilityTime: 3000,
    });
  };

  const onlogin = () => {
    const props = {
      Name: "Shreyas Dhane",
      Identity: "380",
      Email: "shreyas.dhane@gmail.com",
      Phone: "+14155551234",
      Gender: "M",
      "MSG-email": false,
      "MSG-push": true,
      "MSG-sms": false,
      "MSG-whatsapp": true,
    };

    CleverTap.onUserLogin(props);
    navigation.navigate("Dashboard", {
      name: props.Name,
      identity: props.Identity,
    });
    console.log("OUL Called");
  };

  const handleSubmit = () => {
    const { name, identity, email, phone, gender } = user;

    if (!name || !identity || !email) {
      showToast("error", "Please fill all fields");
      return;
    }

    CleverTap.onUserLogin({
      Name: name,
      Identity: identity,
      Email: email,
      Phone: phone,
      Gender: gender,
    });

    console.log("OUL Called");
    navigation.navigate("Dashboard", {
      name: props.Name,
      identity: props.Identity,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Login</Text>

      {/* Name */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={user.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />

      {/* Identity */}
      <TextInput
        style={styles.input}
        placeholder="Identity (Unique ID)"
        value={user.identity}
        onChangeText={(value) => handleInputChange("identity", value)}
      />

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
      />

      {/* Phone */}
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => handleInputChange("phone", value)}
        keyboardType="phone-pad"
      />

      {/* Gender */}
      <TextInput
        style={styles.input}
        placeholder="Gender (M/F)"
        value={user.gender}
        onChangeText={(value) => handleInputChange("gender", value)}
        maxLength={1}
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onlogin}>
        <Text style={styles.buttonText}>Dashboard</Text>
      </TouchableOpacity>

      {/* Toast */}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 45,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Register;

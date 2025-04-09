import CleverTap from "clevertap-react-native";

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Toast from "react-native-toast-message";

const Register = () => {
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

  const handleSubmit = () => {
    const { name, identity, email, phone, gender } = user;

    if (!name || !identity || !email || !phone || !gender) {
      showToast("error", "Please fill all fields");
      return;
    }

    // CleverTap onUserLogin call
    CleverTap.onUserLogin({
      Name: name,
      Identity: identity,
      Email: email,
      Phone: phone,
      Gender: gender,
    });

    Toast.show({
      type: "success",
      text1: "User logged in successfully!",
      position: "bottom",
      visibilityTime: 3000,
    });
    navigation.navigate("Dashboard");
  };
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>User Login</Text>

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

      {/* Submit Button */}
      <Button title="Login" onPress={handleSubmit} />

      {/* Toast Component */}
      <Toast />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
};

export default Register;

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const StatsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stats Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>

      <View>
        <Text style={styles.greeting}>Hello, Sandra</Text>
        <Text style={styles.date}>Today 25 Nov.</Text>
      </View>

      <TouchableOpacity style={styles.searchButton}>
        <Ionicons name="search" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom:20,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  date: {
    fontSize: 14,
    color: "#999",
    marginTop: 2,
  },
});

import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Challenge = () => {
  const avatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Daily challenge</Text>
          <Text style={styles.subtitle}>Do your plan before 09:00 AM</Text>

          <View style={styles.avatarsRow}>
            {avatars.map((avatar, index) => (
              <Image
                key={index}
                source={{ uri: avatar }}
                style={[
                  styles.avatar,
                  { marginLeft: index === 0 ? 0 : -10 },
                ]}
              />
            ))}
            <View style={styles.moreCircle}>
              <Text style={styles.moreText}>+4</Text>
            </View>
          </View>
        </View>

        <Image
          source={require("../../assets/images/imgMian.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Challenge;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#CDB4FF",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: width - 40,
    position: "relative",
    overflow: "hidden",
  },
  textContainer: {
    zIndex: 2,
    width: "65%",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 12,
    color: "#3B3B3B",
    marginTop: 5,
  },
  avatarsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreCircle: {
    backgroundColor: "#fff",
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  moreText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  image: {
    position: "absolute",
    right: -50,
    top: -10,
    width: 200,
    height: 160,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
  },

});

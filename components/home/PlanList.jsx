
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 48) / 2;

const PlanList = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Your Plan</Text>
      <View style={styles.planContainer}>
        <View
          style={[
            styles.leftCard,
            { backgroundColor: "#FBCB6D", minWidth: cardWidth },
          ]}
        >
          <Text style={styles.planLabel}>Medium</Text>
          <Text numberOfLines={1} style={styles.planTitle}>
            Yoga Group
          </Text>
          <Text style={styles.planDate}>25 Nov.</Text>
          <Text style={styles.planTime}>14:00 – 15:00</Text>
          <Text style={styles.planRoom}>A5 room</Text>
          <View style={styles.trainerRow}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/65.jpg",
              }}
              style={styles.trainerImg}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.trainerName}
            >
              Trainer Tiffany Way
            </Text>
          </View>
        </View>

        <View style={styles.rightStack}>
        
          <View
            style={[
              styles.smallCard,
              {
                backgroundColor: "#B7D1FF",
                minWidth: cardWidth,
                maxWidth: cardWidth,
              },
            ]}
          >
            <Text style={styles.planLabel}>Light</Text>
            <Text numberOfLines={1} style={styles.planTitle}>
              Balance
            </Text>
            <Text style={styles.planDate}>28 Nov.</Text>
            <Text style={styles.planTime}>18:00 – 19:30</Text>
            <Text style={styles.planRoom}>A2 room</Text>
          </View>

          <View
            style={[
              styles.smallCard,
              styles.socialCard,
              { minWidth: cardWidth, maxWidth: cardWidth },
            ]}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="logo-instagram" size={26} color="#C13584" />
              <Ionicons name="logo-twitter" size={26} color="#1DA1F2" />
              <Ionicons name="logo-facebook" size={26} color="#3b5998" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 18,
    color: "#1E1E1E",
  },
  planContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  leftCard: {
    borderRadius: 20,
    padding: 18,
    marginRight: 8,
    flex: 1,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    minHeight: 220,
    maxWidth: "53%",
  },
  rightStack: {
    flex: 1,
    justifyContent: "space-between",
    maxWidth: "47%",
  },
  smallCard: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    minHeight: 94,
  },
  planLabel: {
    fontSize: 13,
    fontWeight: "500",
    opacity: 0.8,
    marginBottom: 4,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 4,
    maxWidth: "90%",
  },
  planDate: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: 4,
  },
  planTime: {
    fontSize: 14,
    opacity: 0.8,
    marginVertical: 2,
  },
  planRoom: {
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 8,
  },
  trainerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  trainerImg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  trainerName: {
    fontSize: 13,
    fontWeight: "600",
    maxWidth: 82,
  },
  socialCard: {
    backgroundColor: "#F9A8D4",
    alignItems: "center",
    justifyContent: "center",
    height: 84,
    marginBottom: 0,
    paddingVertical: 14,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 6,
    width: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  socialText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
});

export default PlanList;

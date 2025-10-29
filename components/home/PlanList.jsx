import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PlanList = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.sectionTitle}>Your Plan</Text>
      <View style={styles.planContainer}>
        
        <View style={[styles.leftCard, { backgroundColor: "#FBCB6D" }]}>
          <Text style={styles.planLabel}>Medium</Text>
          <Text style={styles.planTitle}>Yoga Group</Text>
          <Text style={styles.planDate}>25 Nov.</Text>
          <Text style={styles.planTime}>14:00 – 15:00</Text>
          <Text style={styles.planRoom}>A5 room</Text>

          <View style={styles.trainerRow}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/65.jpg" }}
              style={styles.trainerImg}
            />
            <Text style={styles.trainerName}>Trainer Tiffany Way</Text>
          </View>
        </View>

       
        <View style={styles.rightStack}>
       
          <View style={[styles.smallCard, { backgroundColor: "#B7D1FF" }]}>
            <Text style={styles.planLabel}>Light</Text>
            <Text style={styles.planTitle}>Balance</Text>
            <Text style={styles.planDate}>28 Nov.</Text>
            <Text style={styles.planTime}>18:00 – 19:30</Text>
            <Text style={styles.planRoom}>A2 room</Text>
          </View>

          
          <View style={[styles.smallCard, styles.socialCard]}>
            <View style={styles.socialRow}>
              <Ionicons name="logo-instagram" size={28} color="#C13584" />
              <Ionicons name="logo-twitter" size={28} color="#1DA1F2" />
              <Ionicons name="logo-facebook" size={28} color="#3b5998" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
                container:{
                                marginHorizontal:10,
                                marginTop:15,
                },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    marginLeft:10,
    color: "#1E1E1E",
  },
  planContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftCard: {
    flex: 1.1,
    borderRadius: 22,
    padding: 18,
    marginRight: 10,
    justifyContent: "space-between",
    elevation: 3,
  },
  rightStack: {
    flex: 1,
    justifyContent: "space-between",
  },
  smallCard: {
    borderRadius: 22,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
  },
  planLabel: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.9,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 4,
  },
  planDate: {
    fontSize: 14,
    opacity: 0.8,
  },
  planTime: {
    fontSize: 14,
    opacity: 0.8,
  },
  planRoom: {
    fontSize: 14,
    opacity: 0.8,
  },
  trainerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  trainerImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  trainerName: {
    fontSize: 14,
    fontWeight: "600",
  },
  socialCard: {
    backgroundColor: "#F9A8D4",
    alignItems: "center",
    justifyContent: "center",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
});

export default PlanList;

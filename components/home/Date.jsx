import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DateSelector = () => {
  const dates = [
    { day: "Sun", date: "24" },
    { day: "Mon", date: "25" },
    { day: "Tue", date: "26" },
    { day: "Wed", date: "27" },
    { day: "Thu", date: "28" },
    { day: "Fri", date: "29" },
    { day: "Sat", date: "30" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Week</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        keyExtractor={(item) => item.day}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => {
          const active = selectedIndex === index;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedIndex(index)}
              style={[styles.dateCard, active && styles.activeDateCard]}
            >
              <Text style={[styles.dayText, active && styles.activeDayText]}>
                {item.day}
              </Text>
              <Text
                style={[styles.dateNumber, active && styles.activeDateNumber]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DateSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 14,
    color: "#111",
  },
  listContent: {
    paddingRight: 16,
  },
  dateCard: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 2,
  },
  activeDateCard: {
    backgroundColor: "#000",
    transform: [{ scale: 1.08 }],
    shadowOpacity: 0.15,
    elevation: 6,
    borderColor: "#000",
  },
  dayText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#666",
    marginBottom: 4,
  },
  activeDayText: {
    color: "#fff",
  },
  dateNumber: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
  },
  activeDateNumber: {
    color: "#fff",
  },
});

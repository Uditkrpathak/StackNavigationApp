import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/Header";
import Challenge from "../components/home/Challenge";
import Date from "../components/home/Date";
import PlanList from "../components/home/PlanList";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
                    <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Challenge />
        <Date />
        <PlanList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E8FF",
  },
  scrollContainer: {
    paddingHorizontal: 5,
    paddingTop: 1,
    paddingBottom: 120,
  },
});

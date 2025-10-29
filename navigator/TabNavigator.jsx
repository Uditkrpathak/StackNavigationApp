import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import StatsScreen from "../screens/StatsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      elevation: 10,
      backgroundColor: "#0D0D0D",
      borderRadius: 30,
      height: 70,
      borderTopWidth: 0,
      paddingBottom: 10,
      paddingTop: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
    },
    tabBarIcon: ({ focused }) => {
      const icons = {
        Home: focused ? "home" : "home-outline",
        Explore: focused ? "grid" : "grid-outline",
        Stats: focused ? "bar-chart" : "bar-chart-outline",
        Profile: focused ? "person" : "person-outline",
      };

      return (
        <Ionicons
          name={icons[route.name]}
          size={26}
          color={focused ? "#fff" : "#999"}
        />
      );
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

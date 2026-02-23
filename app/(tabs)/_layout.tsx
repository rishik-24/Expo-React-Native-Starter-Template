import { Colors } from "@/utils/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      size={28}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: Colors.hatari.red,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarLabelPosition: "below-icon",
        animation: "shift",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="home"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="settings"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

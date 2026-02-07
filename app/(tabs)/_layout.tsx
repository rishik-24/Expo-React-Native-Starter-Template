import { ThemeToggle } from "@/components/Switch/ThemeToggle";
import { ThemeContext } from "@/src/theme/ThemeContext";
import { Colors } from "@/utils/Colors";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React, { useContext } from "react";
import { useColorScheme } from "react-native";

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
  const colorScheme = useColorScheme();
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderColor:
            currentTheme === "dark" ? Colors.dark.border : Colors.light.border,
          backgroundColor:
            currentTheme === "dark"
              ? Colors.dark.background
              : Colors.light.background,
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#2f9bffff",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarLabelPosition: "below-icon",
        animation: "shift",
        headerTitleStyle: {
          color: currentTheme === "dark" ? Colors.dark.text : Colors.light.text,
          fontWeight: "bold",
        },
        headerRight: () => <ThemeToggle />,
        headerStyle: {
          shadowColor:
            currentTheme === "dark"
              ? Colors.light.background
              : Colors.dark.background,
          shadowOpacity: 0.1,
          backgroundColor:
            currentTheme === "dark"
              ? Colors.dark.background
              : Colors.light.background,
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

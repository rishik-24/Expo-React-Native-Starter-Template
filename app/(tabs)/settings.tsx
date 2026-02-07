import { ThemeContext } from "@/src/theme/ThemeContext";
import { Colors } from "@/utils/Colors";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const settings = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            currentTheme === "dark"
              ? Colors.dark.background
              : Colors.light.background,
        },
      ]}>
      <Text style={styles.title}>This is your "Settings" screen</Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },
});

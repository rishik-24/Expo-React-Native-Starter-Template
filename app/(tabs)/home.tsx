import { ThemeContext } from "@/src/theme/ThemeContext";
import { Colors } from "@/utils/Colors";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const home = () => {
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
      <Text style={styles.title}>This is "Home" screen</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default home;

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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

import { Colors } from "@/utils/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is "Home" screen</Text>
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
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },
});

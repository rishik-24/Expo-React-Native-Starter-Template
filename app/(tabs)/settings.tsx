import { Colors } from "@/utils/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const settings = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>This is "Settings" screen</Text>
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
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },
});

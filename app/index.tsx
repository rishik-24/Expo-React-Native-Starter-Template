import { ThemeContext } from "@/src/theme/ThemeContext";
import { Colors } from "@/utils/Colors";
import { Link } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

const index = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 100,
        paddingHorizontal: 20,
        backgroundColor:
          currentTheme === "dark"
            ? Colors.dark.background
            : Colors.light.background,
      }}>
      <View>
        <LottieView
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://lottie.host/acae7b74-6912-4bb5-b22c-f40a500954ea/YOW2KPfcUd.lottie",
          }}
        />
      </View>

      <Animated.View
        style={{
          position: "absolute",
          bottom: 90,
          borderRadius: 10,
          width: "100%",
          alignItems: "center",
        }}>
        <Link
          href="/(tabs)/home"
          asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#2f9bffff",
              height: 50,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}>
              Getting Started
            </Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

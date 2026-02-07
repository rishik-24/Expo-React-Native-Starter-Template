import { ThemeContext } from "@/src/theme/ThemeContext";
import { Colors } from "@/utils/Colors";
import { useContext } from "react";
import { StyleSheet, Switch } from "react-native";

export function ThemeToggle() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      thumbColor={Colors.primary}
      trackColor={{
        false: Colors.light.border,
        true: Colors.dark.border,
      }}
      value={currentTheme === "dark"}
      onChange={() => toggleTheme(currentTheme === "light" ? "dark" : "light")}
    />
  );
}

const styles = StyleSheet.create({});

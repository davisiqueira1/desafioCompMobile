import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DetailRow({ iconName, size, color, text }) {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={size || 16} color={color || "black"} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 4,
  },
  text: {
    marginLeft: 6,
  },
});

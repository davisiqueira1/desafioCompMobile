import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ iconName, onPress, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { marginRight: 14 },
        pressed ? styles.pressed : null,
      ]}
    >
      <Ionicons name={iconName} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

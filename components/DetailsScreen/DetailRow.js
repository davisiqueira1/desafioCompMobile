import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colorPalette from "../../constants/colorPalette";

export default function DetailRow({
  onPress,
  iconName,
  size,
  color,
  title,
  text,
}) {
  return (
    <View style={styles.container}>
      <Ionicons
        style={{ alignSelf: "center" }}
        name={iconName}
        size={size || 16}
        color={color || "black"}
      />
      <Text style={styles.title}>
        {title}
        <Text onPress={onPress} style={styles.text}>
          {" "}
          {text}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
  },
  title: {
    marginLeft: 6,
  },
  text: {
    fontWeight: "300",
    color: colorPalette.secondaryColor,
  },
});

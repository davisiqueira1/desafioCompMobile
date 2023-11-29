import { View, Text, StyleSheet } from "react-native";
import colorPalette from "../../constants/colorPalette";

export default function NumberStats({ onPress, title, subtitle }) {
  return (
    <View onTouchEnd={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
  },
  subtitle: {
    fontWeight: "300",
    color: colorPalette.secondaryColor,
  },
});

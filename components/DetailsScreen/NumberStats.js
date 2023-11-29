import { View, Text, StyleSheet } from "react-native";
import colorPalette from "../../constants/colorPalette";
import fonts from "../../constants/fonts";

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
    fontFamily: fonts.secondaryText,
    fontSize: 21,
  },
  subtitle: {
    fontFamily: fonts.secondaryText,
    color: colorPalette.secondaryColor,
  },
});

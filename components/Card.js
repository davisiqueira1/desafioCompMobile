import { View, StyleSheet, Pressable, useWindowDimensions } from "react-native";
import colorPalette from "../constants/colorPalette";
export default function Card({ onPress, children, index }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width - 30 }]}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        <View>{children}</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colorPalette.cardBackground,
    borderWidth: 1,
    borderColor: colorPalette.cardBorder,
    borderRadius: 10,
    marginLeft: 4,
    marginRight: 8,
    elevation: 2,
  },
  pressableContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { View, StyleSheet, Pressable, useWindowDimensions } from "react-native";
export default function Card({ onPress, children }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width }]}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        <View style={styles.content}>{children}</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#ccc",
  },
  pressableContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {},
});

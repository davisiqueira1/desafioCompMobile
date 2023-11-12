import { View, StyleSheet, Pressable } from "react-native";
export default function Card({ children }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => console.log("pressed")}
      >
        <View style={styles.content}>{children}</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    width: "80%",
    height: 200,
  },
  pressableContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {},
});

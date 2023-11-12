import { View, Text, StyleSheet } from "react-native";

export default function Header({ nomePagina }) {
  return (
    <View style={styles.container}>
      {/* logo/icone */}
      <Text>{nomePagina}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
});

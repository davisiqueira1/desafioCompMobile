import { View, Text, StyleSheet } from "react-native";

export default function NumberStats({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    // backgroundColor: "#ccc",
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
  },
  subtitle: {},
});

import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import Carrossel from "../components/Carrossel";

export default function CarrosselScreen() {
  const data = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <Carrossel
        data={data}
        renderItem={({ item }) => (
          <Card>
            <Text>{item}</Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

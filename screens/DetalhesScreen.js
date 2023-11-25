import { View, Text, StyleSheet } from "react-native";

export default function DetalhesScreen({ route, navigation }) {
  const profile = route.params.profileDetails;
  return (
    <View style={styles.container}>
      <Text>{profile.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

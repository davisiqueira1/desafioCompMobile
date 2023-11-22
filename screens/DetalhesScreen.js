import { View, Text } from "react-native";

export default function DetalhesScreen({ route, navigation }) {
  return (
    <View>
      <Text>{route.params.profileDetails.id}</Text>
    </View>
  );
}

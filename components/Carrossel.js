import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Card from "./Card";

const onCardPress = (navigation, profileDetails) => {
  navigation.navigate("Detalhes", {
    profileDetails: profileDetails,
  });
};

export default function Carrossel({ navigation, data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card onPress={onCardPress.bind(this, navigation, item)}>
            <Text>{item.login}</Text>
            <Image style={styles.image} source={{ uri: item.avatar_url }} />
          </Card>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200, // height do card
  },
  image: {
    width: 100,
    height: 100,
  },
});

import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Card from "./Card";

export default function Carrossel({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card>
            <Text>{item.name}</Text>
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

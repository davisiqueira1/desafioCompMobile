import { View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import Profile from "./DetailsScreen/Profile";

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
        renderItem={(item) => (
          <Card
            key={item.item.id}
            index={item.index}
            onPress={onCardPress.bind(this, navigation, item.item)}
          >
            <Profile profile={item.item} />
          </Card>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200, // height do card
    // elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
});

import { View, StyleSheet, FlatList } from "react-native";

export default function Carrossel({ data, renderItem }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
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
});

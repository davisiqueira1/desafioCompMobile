import { View, Text, StyleSheet } from "react-native";
import Carrossel from "../Carrossel";
import colorPalette from "../../constants/colorPalette";

export default function TituloECarrossel({ title, navigation, data }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.carrosselContainer}>
        <Carrossel navigation={navigation} data={data} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 100,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 38,
    fontFamily: fonts.title,
    textAlign: "center",
  },
  line: {
    width: "60%",
    backgroundColor: colorPalette.primaryColor,
    marginTop: 3.5,
    marginBottom: 100,
    height: 0.75,
  },
  carrosselContainer: {
    alignItems: "center",
  },
});

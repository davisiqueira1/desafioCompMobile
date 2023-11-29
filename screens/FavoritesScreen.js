import { View, Text, StyleSheet } from "react-native";
import Carrossel from "../components/Carrossel";
import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import colorPalette from "../constants/colorPalette";

export default function FavoritosScreen({ navigation }) {
  const favoriteProfiles = useContext(FavoritesContext).favorites;

  return (
    <View style={styles.container}>
      {favoriteProfiles.length === 0 ? (
        <Text>Você não favoritou nenhum perfil!</Text>
      ) : (
        <Carrossel navigation={navigation} data={favoriteProfiles} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

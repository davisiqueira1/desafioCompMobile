import { View, Text, StyleSheet } from "react-native";
import Carrossel from "../components/Carrossel";
import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import colorPalette from "../constants/colorPalette";
import TituloECarrossel from "../components/DetailsScreen/TituloECarrossel";
import fonts from "../constants/fonts";

export default function FavoritosScreen({ navigation }) {
  const favoriteProfiles = useContext(FavoritesContext).favorites;

  return favoriteProfiles.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.text}>Você não favoritou nenhum perfil!</Text>
    </View>
  ) : (
    <View style={[styles.container, { justifyContent: "flex-start" }]}>
      <TituloECarrossel
        title="PERFIS FAVORITOS"
        navigation={navigation}
        data={favoriteProfiles}
      />
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
  text: {
    fontFamily: fonts.primaryText,
    fontSize: 22,
  },
});

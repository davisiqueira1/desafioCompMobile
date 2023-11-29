import { View, StyleSheet } from "react-native";
import DetailContainer from "../components/DetailsScreen/DetailContainer";
import NumberStatsContainer from "../components/DetailsScreen/NumberStatsContainer";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../components/DetailsScreen/Profile";
import { useContext, useLayoutEffect } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import colorPalette from "../constants/colorPalette";

export default function DetailsScreen({ route, navigation }) {
  const favoriteProfilesCtx = useContext(FavoritesContext);
  const profile = route.params.profileDetails;

  const profileIsFavorite = favoriteProfilesCtx.favorites.includes(profile);

  const toggleFavorite = () => {
    if (profileIsFavorite) favoriteProfilesCtx.removeFavorite(profile);
    else favoriteProfilesCtx.addFavorite(profile);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          style={{ marginRight: 15 }}
          name={profileIsFavorite ? "star" : "star-outline"}
          color="black"
          size={24}
          onPress={toggleFavorite}
        />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileStats}>
        <View style={styles.profileContainer}>
          <Profile profile={profile} />
        </View>
        <NumberStatsContainer profile={profile} />
      </View>
      <View style={styles.detailContainer}>
        <DetailContainer profile={profile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundColor,
  },
  profileStats: {
    paddingTop: 32,
  },
  profileContainer: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colorPalette.borderColor,
    marginHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 10,
  },
  numberStats: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  detailContainer: {
    backgroundColor: colorPalette.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginVertical: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorPalette.borderColor,
    // elevation: 1,
  },
});

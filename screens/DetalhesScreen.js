import { View, StyleSheet } from "react-native";
import DetailContainer from "../components/DetailsScreen/DetailContainer";
import NumberStatsContainer from "../components/DetailsScreen/NumberStatsContainer";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../components/DetailsScreen/Profile";
import { useContext, useLayoutEffect } from "react";
import { FavoritesContext } from "../context/favoritesContext";

export default function DetalhesScreen({ route, navigation }) {
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
        <Profile style={styles.profile} profile={profile} />
        <NumberStatsContainer profile={profile} />
      </View>
      <View style={styles.detailContainer}>
        <DetailContainer profile={profile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginBottom: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileStats: {
    marginTop: 32,
  },
  numberStats: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    paddingVertical: 16,
  },
});

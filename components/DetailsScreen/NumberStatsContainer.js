import { View, StyleSheet, Linking } from "react-native";
import NumberStats from "./NumberStats";
import colorPalette from "../../constants/colorPalette";

export default function NumberStatsContainer({ profile }) {
  return (
    <View style={[styles.numberStats]}>
      <NumberStats title={profile.following} subtitle="Seguindo" />
      <NumberStats title={profile.followers} subtitle="Seguidores" />
      <NumberStats
        onPress={() => Linking.openURL(`${profile.html_url}?tab=repositories`)}
        title={profile.public_repos}
        subtitle="Repositórios"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  numberStats: {
    marginVertical: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: colorPalette.borderColor,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 24,
  },
});

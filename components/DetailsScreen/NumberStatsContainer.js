import { View, StyleSheet } from "react-native";
import NumberStats from "./NumberStats";

export default function NumberStatsContainer({ profile }) {
  return (
    <View style={[styles.numberStats]}>
      <NumberStats title={profile.following} subtitle="Following" />
      <NumberStats title={profile.followers} subtitle="Followers" />
      <NumberStats title={profile.public_repos} subtitle="Repositories" />
    </View>
  );
}

const styles = StyleSheet.create({
  numberStats: {
    marginVertical: 8,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "center",
  },
});

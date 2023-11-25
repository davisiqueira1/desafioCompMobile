import { View, Text, StyleSheet, Image } from "react-native";
import NumberStats from "../components/DetailsScreen/NumberStats";
import DetailContainer from "../components/DetailsScreen/DetailContainer";
import NumberStatsContainer from "../components/DetailsScreen/NumberStatsContainer";
import Profile from "../components/DetailsScreen/Profile";

export default function DetalhesScreen({ route }) {
  const profile = route.params.profileDetails;
  return (
    <View style={styles.container}>
      <View style={styles.profileStats}>
        <Profile style={styles.profile} profile={profile} />
        <NumberStatsContainer profile={profile} />
      </View>
      <View style={styles.teste}>
        <DetailContainer profile={profile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teste: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    paddingVertical: 16,
  },
  profile: {
    marginBottom: 8,
    paddingBottom: 16,
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
});

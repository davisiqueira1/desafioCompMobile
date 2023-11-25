import { View, Text, StyleSheet, Image } from "react-native";
import NumberStats from "../components/NumberStats";

export default function DetalhesScreen({ route, navigation }) {
  const profile = route.params.profileDetails;
  return (
    <View style={styles.container}>
      <View style={styles.profileStats}>
        <View style={styles.details}>
          <Image style={styles.image} source={{ uri: profile.avatar_url }} />
          <View style={styles.identification}>
            <Text style={styles.identificationName}>{profile.name}</Text>
            <Text style={styles.identificationLogin}>{profile.login}</Text>
          </View>
        </View>
        <View style={styles.numberStats}>
          <NumberStats title={profile.following} subtitle="Following" />
          <NumberStats title={profile.followers} subtitle="Followers" />
          <NumberStats title={profile.public_repos} subtitle="Repositories" />
        </View>
        <View></View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileStats: {
    marginTop: 32,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  details: {
    // backgroundColor: "#ccc",
    justifyContent: "center",
    flexDirection: "row",
  },
  identification: {
    marginLeft: 28,
    justifyContent: "center",
  },
  identificationName: {
    fontSize: 24,
  },
  identificationLogin: {
    fontSize: 14,
  },
  numberStats: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
});

import { View, Image, Text, StyleSheet } from "react-native";

export default function Profile({ profile, style }) {
  return (
    <View style={[styles.details, style]}>
      <Image style={styles.image} source={{ uri: profile.avatar_url }} />
      <View style={styles.identification}>
        <Text style={styles.identificationName}>{profile.name}</Text>
        <Text style={styles.identificationLogin}>{profile.login}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

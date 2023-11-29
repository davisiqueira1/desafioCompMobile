import { View, Image, Text, StyleSheet } from "react-native";
import colorPalette from "../../constants/colorPalette";

export default function Profile({ profile, style }) {
  return (
    <View style={[styles.details, style]}>
      <Image style={styles.image} source={{ uri: profile.avatar_url }} />
      <View style={styles.identification}>
        <Text style={styles.identificationName}>
          {/* caso o usuário não tenha nome cadastrado */}
          {profile.name || profile.login}
        </Text>
        <Text style={styles.identificationLogin}>{profile.login}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    // backgroundColor: "#ccc",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  identification: {
    marginLeft: 42,
    justifyContent: "center",
  },
  identificationName: {
    fontSize: 24,
  },
  identificationLogin: {
    fontSize: 14,
    fontWeight: "300",
    color: colorPalette.secondaryColor,
  },
});

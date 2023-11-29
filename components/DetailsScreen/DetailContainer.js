import { View, StyleSheet, Linking } from "react-native";
import DetailRow from "./DetailRow";

export default function DetailContainer({ profile }) {
  return (
    <View style={styles.container}>
      <DetailRow
        onPress={() => Linking.openURL(profile.html_url)}
        title="Link:"
        iconName="logo-github"
        text={profile.html_url}
      />
      <DetailRow
        iconName="briefcase"
        title="Empresa:"
        text={profile.company || "Sem informações disponíveis"}
      />
      <DetailRow
        iconName="locate"
        title="Localização:"
        text={profile.location || "Sem informações disponíveis"}
      />
      <DetailRow
        iconName="mail"
        title="Email:"
        text={profile.email || "Sem informações disponíveis"}
      />
      <DetailRow
        iconName="logo-twitter"
        title="Twitter:"
        text={profile.twitter_username || "Sem informações disponíveis"}
      />
      <DetailRow
        iconName="create"
        title="Data de criação:"
        text={profile.created_at || "Sem informações disponíveis"}
      />
      <DetailRow
        iconName="refresh"
        title="Última modificação:"
        text={profile.updated_at || "Sem informações disponíveis"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
  },
});

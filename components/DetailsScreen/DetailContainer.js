import { View } from "react-native";
import DetailRow from "./DetailRow";

export default function DetailContainer({ profile }) {
  return (
    <View>
      <DetailRow iconName="logo-github" text={"URL: " + profile.url} />
      <DetailRow
        iconName="briefcase"
        text={"Company: " + (profile.company || "No information is available")}
      />
      <DetailRow
        iconName="locate"
        text={
          "Location: " + (profile.location || "No information is available")
        }
      />
      <DetailRow
        iconName="mail"
        text={"Email: " + (profile.email || "No information is available")}
      />
      <DetailRow
        iconName="logo-twitter"
        text={
          "Twitter: " +
          (profile.twitter_username || "No information is available")
        }
      />
      <DetailRow
        iconName="create"
        text={
          "Created at: " + (profile.created_at || "No information is available")
        }
      />
      <DetailRow
        iconName="refresh"
        text={
          "Updated at: " + (profile.updated_at || "No information is available")
        }
      />
    </View>
  );
}

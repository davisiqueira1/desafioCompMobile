import { View, StyleSheet } from "react-native";
import {
  ButtonText,
  InputText,
  InputButton,
} from "../components/LoginComponents";

export default function LoginScreen({ loginHandler }) {
  return (
    <View style={styles.container}>
      <InputText
        placeholder={"Email"}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => console.log("email: " + text)}
      />
      <InputText
        placeholder={"Senha"}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => console.log("senha: " + text)}
      />
      <InputButton onPress={loginHandler}>
        <ButtonText>Logar</ButtonText>
      </InputButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

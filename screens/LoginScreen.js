import { View, StyleSheet } from "react-native";
import {
  ButtonText,
  InputText,
  InputButton,
} from "../components/LoginComponents";
import { useForm, Controller } from "react-hook-form";

export default function LoginScreen({ loginHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputText
            placeholder={"Email"}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText
            placeholder={"Senha"}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <InputButton onPress={handleSubmit(loginHandler)}>
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

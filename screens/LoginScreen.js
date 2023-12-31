import { View, StyleSheet } from "react-native";
import { InputText, InputErrorMessage } from "../components/StyledComponents";
import InputButton from "../components/InputButton";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import colorPalette from "../constants/colorPalette";

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Insira seu endereço de email.")
    .email("Esse endereço de email não é válido."),
  password: yup.string().required("Insira sua senha."),
});

export default function LoginScreen({ loginHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <View style={styles.container}>
      <Ionicons style={{ marginBottom: 24 }} name="logo-github" size={128} />
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
      {errors.email && (
        <InputErrorMessage>{errors.email.message}</InputErrorMessage>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
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
      {errors.password && (
        <InputErrorMessage>{errors.password.message}</InputErrorMessage>
      )}

      <InputButton onPress={handleSubmit(loginHandler)}>Entrar</InputButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

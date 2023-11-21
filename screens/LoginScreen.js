import { View, StyleSheet } from "react-native";
import {
  ButtonText,
  InputText,
  InputButton,
  InputErrorMessage,
} from "../components/ComponentesEstilizados";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

      <InputButton
        onPress={handleSubmit(loginHandler)}
        android_ripple={{ color: "#ccc" }}
      >
        <ButtonText>Entrar</ButtonText>
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

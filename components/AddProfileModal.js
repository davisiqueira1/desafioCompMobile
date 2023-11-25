import { View, Modal, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import axios from "../services/axios";
import { InputText } from "./StyledComponents";
import InputButton from "./InputButton";

export default function ModalAdicionar({ onAddProfile, setNotVisible }) {
  const [enteredText, setEnteredText] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addProfileHandler = () => {
    axios
      .get(enteredText)
      .then((res) => {
        onAddProfile(res.data);
        setNotVisible();
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Erro!", "Esse perfil não existe.");
      });
    setEnteredText("");
  };

  return (
    <>
      <StatusBar style="dark-content" />
      <Modal animationType="slide">
        <View style={styles.container}>
          <Ionicons
            style={{ marginBottom: 24 }}
            name="logo-github"
            size={128}
            color="black"
          />
          <InputText
            placeholder="Digite o nome de um perfil no GitHub"
            style={styles.inputText}
            onChangeText={textInputHandler}
            autoCapitalize="none"
            value={enteredText} // quando adicionar um perfil, o campo vai ser limpo (linha 21)
          />
          <View style={styles.buttonContainer}>
            <InputButton style={styles.button} onPress={setNotVisible}>
              Cancelar
            </InputButton>
            <InputButton style={styles.button} onPress={addProfileHandler}>
              Adicionar
            </InputButton>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
  },
  inputText: {
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  button: {
    width: "40%",
    marginHorizontal: 12,
  },
});
import { View, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "../services/axios";
import { ButtonText, InputButton, InputText } from "./ComponentesEstilizados";

export default function ModalAdicionar({ onAddProfile, setNotVisible }) {
  const [enteredText, setEnteredText] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addProfileHandler = () => {
    axios
      .get(enteredText)
      .then((res) => {
        onAddProfile({ name: res.data.name, avatar_url: res.data.avatar_url });
      })
      .catch((err) => console.log(err));
    setEnteredText("");
  };

  return (
    <>
      <StatusBar style="dark-content" />
      <Modal animationType="slide">
        <View style={styles.container}>
          {/* <Image/> logo do github */}
          <InputText
            placeholder="Digite o nome de um perfil no GitHub"
            style={styles.inputText}
            onChangeText={textInputHandler}
            autoCapitalize="none"
            value={enteredText} // quando adicionar uma tarefa, o campo vai ser limpo (linha 21)
          />
          <View style={styles.buttonContainer}>
            <InputButton style={styles.button} onPress={setNotVisible}>
              <ButtonText>Cancelar</ButtonText>
            </InputButton>
            <InputButton style={styles.button} onPress={addProfileHandler}>
              <ButtonText>Adicionar</ButtonText>
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

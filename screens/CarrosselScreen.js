import { View, StyleSheet } from "react-native";
import Carrossel from "../components/Carrossel";
import { useState } from "react";
import { InputButton, ButtonText } from "../components/ComponentesEstilizados";
import ModalAdicionar from "../components/ModalAdicionar";
import defaultProfile from "../data/defaultProfile";
import axios from "axios";

export default function CarrosselScreen({ navigation }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userList, setUserList] = useState([defaultProfile]);

  const onAddProfile = (newProfile) => {
    setUserList((currentUsers) => [...currentUsers, newProfile]);
  };

  return (
    <View style={styles.container}>
      <Carrossel navigation={navigation} data={userList} />
      <InputButton
        android_ripple={{ color: "#ccc" }}
        onPress={setModalIsVisible.bind(this, true)}
        style={styles.botaoAdicionar}
      >
        <ButtonText>Adicionar perfil</ButtonText>
      </InputButton>
      {modalIsVisible && (
        <ModalAdicionar
          onAddProfile={onAddProfile}
          setNotVisible={setModalIsVisible.bind(this, false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoAdicionar: {
    width: "40%",
    marginTop: 12,
  },
});

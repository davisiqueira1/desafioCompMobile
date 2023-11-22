import { View, StyleSheet } from "react-native";
import Carrossel from "../components/Carrossel";
import { useState } from "react";
import { InputButton, ButtonText } from "../components/ComponentesEstilizados";
import ModalAdicionar from "../components/ModalAdicionar";

export default function CarrosselScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userList, setUserList] = useState([
    {
      id: 93483437,
      login: "Davi Siqueira",
      avatar_url: "https://avatars.githubusercontent.com/u/93483437?v=4",
    },
  ]);

  const onAddProfile = (newProfile) => {
    // newProfile: objeto com keys id, login e avatar_url (por enquanto)
    setUserList((currentUsers) => [...currentUsers, newProfile]);
  };

  return (
    <View style={styles.container}>
      <Carrossel data={userList} />
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

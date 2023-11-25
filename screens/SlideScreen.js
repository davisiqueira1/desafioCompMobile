import { View, StyleSheet } from "react-native";
import Carrossel from "../components/Slide";
import { useState } from "react";
import InputButton from "../components/InputButton";
import AddProfileModal from "../components/AddProfileModal";
import defaultProfile from "../data/defaultProfile";

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
        onPress={setModalIsVisible.bind(this, true)}
        style={styles.addButton}
      >
        Adicionar perfil
      </InputButton>
      {modalIsVisible && (
        <AddProfileModal
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
  addButton: {
    width: "40%",
    marginTop: 12,
  },
});

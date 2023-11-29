import { View, StyleSheet, Text } from "react-native";
import Carrossel from "../components/Carrossel";
import { useState } from "react";
import InputButton from "../components/InputButton";
import AddProfileModal from "../components/AddProfileModal";
import defaultProfiles from "../data/defaultProfiles";
import colorPalette from "../constants/colorPalette";
import fonts from "../constants/fonts";
import TituloECarrossel from "../components/DetailsScreen/TituloECarrossel";

export default function CarrosselScreen({ navigation }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userList, setUserList] = useState(defaultProfiles); // começa com 2 cards no slide

  const onAddProfile = (newProfile) => {
    setUserList((currentUsers) => [...currentUsers, newProfile]);
  };

  return (
    <View style={styles.container}>
      <TituloECarrossel
        title="TODOS OS PERFIS"
        navigation={navigation}
        data={userList}
      />
      <InputButton
        onPress={setModalIsVisible.bind(this, true)}
        style={styles.addButton}
      >
        Adicionar perfil
      </InputButton>
      {modalIsVisible && (
        <AddProfileModal
          userList={userList}
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
    backgroundColor: colorPalette.backgroundColor,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  addButton: {
    width: "40%",
    marginTop: 12,
  },
});

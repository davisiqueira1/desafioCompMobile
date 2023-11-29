import { View, StyleSheet, Text } from "react-native";
import Carrossel from "../components/Carrossel";
import { useState } from "react";
import InputButton from "../components/InputButton";
import AddProfileModal from "../components/AddProfileModal";
import defaultProfiles from "../data/defaultProfiles";
import colorPalette from "../constants/colorPalette";
import fonts from "../constants/fonts";

export default function CarrosselScreen({ navigation }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userList, setUserList] = useState(defaultProfiles); // começa com 2 cards no slide

  const onAddProfile = (newProfile) => {
    setUserList((currentUsers) => [...currentUsers, newProfile]);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>{"Todos\nos\nperfis"}</Text>
      </View> */}
      {/* <View style={styles.carrosselContainer}> */}
      <Text style={styles.title}>TODOS OS PERFIS</Text>
      <Carrossel navigation={navigation} data={userList} />
      <InputButton
        onPress={setModalIsVisible.bind(this, true)}
        style={styles.addButton}
      >
        Adicionar perfil
      </InputButton>
      {/* </View> */}
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
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  title: {
    fontSize: 38,
    fontFamily: fonts.title,
    textAlign: "center",
  },
  carrosselContainer: {
    // flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "green",
  },
  addButton: {
    width: "40%",
    marginTop: 12,
  },
});

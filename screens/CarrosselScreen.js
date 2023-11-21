import { View, StyleSheet } from "react-native";
import Carrossel from "../components/Carrossel";
import axios from "../services/axios";
import { useEffect, useState } from "react";
import { InputButton, ButtonText } from "../components/ComponentesEstilizados";

export default function CarrosselScreen() {
    const [userList, setUserList] = useState([
        {
            name: "Davi Siqueira",
            avatar_url: "https://avatars.githubusercontent.com/u/93483437?v=4",
        },
    ]);

    useEffect(() => {
        axios
            .get("/torvalds")
            .then((res) => {
                setUserList((currentUsers) => [
                    ...currentUsers,
                    { name: res.data.name, avatar_url: res.data.avatar_url },
                ]);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <View style={styles.container}>
            <Carrossel data={userList} />
            <InputButton android_ripple={{ color: "#ccc" }}>
                <ButtonText>Adicionar perfil</ButtonText>
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

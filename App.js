import "react-native-gesture-handler"; // necessário para fazer o drawer funcionar
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CarrosselScreen from "./screens/CarrosselScreen";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";
import IconButton from "./components/IconButton";
import FavoritosScreen from "./screens/FavoritosScreen";

/**
 * TODO
 * criar botão e tela para adicionar perfil do github no carrossel de cards
 *  entrada: nome no github
 *
 * criar fluxo de autenticação com perfil do github
 * (o primeiro card vai ter o nome e foto de perfil do usuario que deu login ao invés de ser hardcoded)
 *
 * estilizar telas etc
 *
 */

const Drawer = createDrawerNavigator();

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      {logado ? (
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerRight: () => (
                <IconButton
                  iconName="log-out-outline"
                  color="black"
                  onPress={setLogado.bind(this, false)}
                />
              ),
            }}
          >
            <Drawer.Screen name="Todos os perfis" component={CarrosselScreen} />
            <Drawer.Screen
              name="Perfis favoritados"
              component={FavoritosScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <LoginScreen loginHandler={setLogado.bind(this, true)} />
      )}
    </>
  );
}

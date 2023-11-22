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
 *
 * apertar no card e aparecer mais informações do perfil
 * modal ou stack navigation?
 *
 * desenvolver funcionalidade de adicionar perfil nos favoritos
 *  - estrelinha no card com context
 *  - perfil agora aparece no carrossel da pagina de favoritos
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
      <StatusBar style="dark-content" />
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

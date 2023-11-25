import "react-native-gesture-handler"; // necessário para fazer o drawer funcionar
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DrawerNavigator from "./components/DrawerNavigator";
import DetalhesScreen from "./screens/DetalhesScreen";

/**
 * TODO
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

const Stack = createStackNavigator();

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <>
      <StatusBar style="dark-content" />
      {logado ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Todos os perfis"
              component={DrawerNavigator}
            />
            <Stack.Screen
              options={{
                headerRight: () => (
                  <Ionicons
                    style={{ marginRight: 16 }}
                    name="star-outline"
                    color="black"
                    size={24}
                  />
                ),
              }}
              name="Detalhes"
              component={DetalhesScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <LoginScreen loginHandler={setLogado.bind(this, true)} />
      )}
    </>
  );
}

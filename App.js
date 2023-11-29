import "react-native-gesture-handler"; // necessário para fazer o drawer funcionar
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import { useState, useEffect } from "react";
import { loadAsync } from "expo-font";
import DrawerNavigator from "./components/DrawerNavigator";
import DetailsScreen from "./screens/DetailsScreen";
import FavoritesContextProvider from "./context/favoritesContext";

const Stack = createStackNavigator();

export default function App() {
  const [logged, setLogged] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAsync({
      "garamond-regular": require("./assets/fonts/EBGaramond-Regular.ttf"),
      "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "felixtitling-regular": require("./assets/fonts/FelixTitling-Regular.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar style="dark-content" />
      {logged ? (
        <FavoritesContextProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Todos os perfis"
                component={DrawerNavigator}
              />
              <Stack.Screen name="Detalhes" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      ) : (
        <LoginScreen loginHandler={setLogged.bind(this, true)} />
      )}
    </>
  );
}

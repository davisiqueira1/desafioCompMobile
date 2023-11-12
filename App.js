import "react-native-gesture-handler"; // necessário para fazer o drawer funcionar
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CarrosselScreen from "./screens/CarrosselScreen";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";
import IconButton from "./components/IconButton";

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
            <Drawer.Screen name="CarrosselScreen" component={CarrosselScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <LoginScreen loginHandler={setLogado.bind(this, true)} />
      )}
    </>
  );
}

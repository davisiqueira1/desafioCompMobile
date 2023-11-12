import "react-native-gesture-handler"; // necessário para fazer o drawer funcionar
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CarrosselScreen from "./screens/CarrosselScreen";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";

const Drawer = createDrawerNavigator();

export default function App() {
  const [logado, setLogado] = useState(false);

  return logado ? (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="CarrosselScreen" component={CarrosselScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <LoginScreen loginHandler={setLogado.bind(this, true)} />
  );
}

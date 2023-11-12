import "react-native-gesture-handler"; // necessário para fazer o drawer funcionar
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CarrosselScreen from "./screens/CarrosselScreen";
import LoginScreen from "./screens/LoginScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="CarrosselScreen" component={CarrosselScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

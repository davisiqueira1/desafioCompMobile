import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CarrosselScreen from "../screens/SlideScreen";
import FavoritosScreen from "../screens/FavoritesScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          title: "Todos os perfis",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        name="Carrossel"
        component={CarrosselScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
        name="Perfis favoritados"
        component={FavoritosScreen}
      />
    </Drawer.Navigator>
  );
}

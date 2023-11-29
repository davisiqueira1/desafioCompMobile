import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CarrosselScreen from "../screens/CarrosselScreen";
import FavoritosScreen from "../screens/FavoritesScreen";
import colorPalette from "../constants/colorPalette";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerintColor: colorPalette.primaryColor,
        drawerInactiveTintColor: colorPalette.primaryColor,
        drawerActiveTintColor: colorPalette.primaryColor,
        drawerActiveBackgroundColor: colorPalette.cardBackground,
      }}
    >
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

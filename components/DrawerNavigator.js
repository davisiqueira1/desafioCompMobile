import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CarrosselScreen from "../screens/CarrosselScreen";
import FavoritosScreen from "../screens/FavoritesScreen";
import colorPalette from "../constants/colorPalette";
import fonts from "../constants/fonts";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Ionicons
            name="list-outline"
            style={{ marginLeft: 15 }}
            size={22}
            onPress={navigation.toggleDrawer}
          />
        ),
        drawerLabelStyle: {
          fontFamily: fonts.secondaryText,
          fontSize: 16,
        },
        headerTitleStyle: {
          fontFamily: fonts.primaryText,
          fontSize: 22,
        },
        headerintColor: colorPalette.primaryColor,
        drawerInactiveTintColor: colorPalette.primaryColor,
        drawerActiveTintColor: colorPalette.primaryColor,
        drawerActiveBackgroundColor: colorPalette.cardBackground,
      })}
    >
      <Drawer.Screen
        options={{
          title: "Todos os perfis",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
        name="Carrossel"
        component={CarrosselScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" color={color} size={size} />
          ),
        }}
        name="Perfis favoritos"
        component={FavoritosScreen}
      />
    </Drawer.Navigator>
  );
}

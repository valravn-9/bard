import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { toggleColorScheme, colorScheme } = useColorScheme();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary, // Use the theme's primary color for active icons
        tabBarInactiveTintColor: colors.text, // Use the theme's text color for inactive icons
        tabBarStyle: {
          backgroundColor: colors.background, // Set the tab bar background color
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => toggleColorScheme()}>
              <Ionicons
                name={colorScheme === "dark" ? "sunny" : "moon"}
                size={24}
                color={colors.primary}
                className="mr-2"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => toggleColorScheme()}>
              <Ionicons
                name={colorScheme === "dark" ? "sunny" : "moon"}
                size={24}
                color={colors.primary}
                className="mr-2"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

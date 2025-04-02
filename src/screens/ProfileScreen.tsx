import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export const ProfileScreen = () => {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
};

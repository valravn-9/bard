import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigator } from "./src/navigation/StackNavigator";

const Stack = createNativeStackNavigator();

export const App = () => {
  return <StackNavigator />;
};

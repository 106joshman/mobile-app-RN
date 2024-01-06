import { StatusBar, StyleSheet, View } from "react-native";
import Instruction from "./src/screens/Instruction";
import Home from "./src/screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar />
      <Stack.Navigator
        options={{ headerShown: false }}
        initialRouteName="Instruction"
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Instruction"
          options={{ headerShown: false }}
          component={Instruction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// #123331, #F6EEE5, #8EEBAE

import { StyleSheet, View } from "react-native";
import Welcome from "./src/screens/welcome";
import Home from "./src/screens/home";
import Analytics from "./src/screens/analytics";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      {/* <Analytics /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07352E",

  },
});

// #123331, #F6EEE5, #8EEBAE

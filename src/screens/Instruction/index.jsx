import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Instruction({ navigation }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, styles.headText]}>how to play?</Text>
          <Text style={[styles.text, styles.instructText]}>
            Tap on any numbered tile from 1-18, A word or phrase will be
            revealed for the playing team to see and explain (pantomime) for the
            team representative to guess.
          </Text>
          <Text style={[styles.text, styles.instructText]}>
            Remember - no talking!
          </Text>
          <Text style={[styles.text, styles.instructText]}>
            Round Duration - 30 Seconds
          </Text>
        </View>
        <View>
          {show && (
            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={styles.bttn}
            >
              <Text style={styles.bttnText}>Ready!</Text>
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#07352E",
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  text: {
    color: "#FFF",
    marginBottom: 20,
  },
  headText: {
    textTransform: "uppercase",
    marginTop: 20,
    fontSize: 30,
  },
  instructText: {
     fontSize: 20, lineHeight: 28
    },
  bttn: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#40C9A2",
    marginTop: 20,
  },
  bttnText: {
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 24,
  },
});

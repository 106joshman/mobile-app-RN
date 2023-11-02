import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Welcome() {
  const { wrapper, container, emoji, text, bttnWrap } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <View style={{ alignItems: "center" }}>
          <Text style={text}>...a blaq game</Text>
          <Text style={emoji}>👽</Text>
        </View>

        <View style={bttnWrap}>
          <Pressable
            style={{
              borderRadius: 100,
              height: 50,
              width: 50,
              padding: 8,
              alignItems: "center",
              backgroundColor: "#c9b6e9",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="chevron-right" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 32,
  },
  emoji: {
    fontSize: 50,
    marginTop: 10,
  },
  bttnWrap: {
    position: "absolute",
    bottom: 100,
  },
});

// "linear-gradient(to right, #050505, #d0eaf9, #3d3b46, #c9b6e9, #827e9c,,#a0a0ba)",

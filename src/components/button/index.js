import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export function ButtonItem({ title, onPress, isPressed }) {
  // const [isPressed, setIsPressed] = useState(false);

  // const handleView = (e) => {
  //   setIsPressed(true);
  //   console.log(e);
  // };

  return (
    <Pressable
      onPress={() => {
        // setIsPressed(true);
        alert(`${title}`);
        onPress;
      }}
      style={[styles.button, { backgroundColor: isPressed ? "grey" : "black" }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minWidth: 120,
    maxWidth: "25%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    fontWeight: 500,
    margin: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

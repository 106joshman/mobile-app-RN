import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BankCard({ item }) {
  const { cardNumb, cardBal } = item;

  const { wrapper, textWrap, balText, numbText } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#C9B6E9", "#D0EAF9"]}
      style={wrapper}
    >
      <View>
        <View>
          <Image
            style={{
              // borderRadius: 25,
              backgroundColor: "transparent",
              height: 50,
              width: 50,
            }}
            source={require("../../../assets/MC.png")}
          />
        </View>

        <View style={textWrap}>
          <Text style={balText}>{cardBal}</Text>
        </View>

        <View style={textWrap}>
          <Text
            style={{
              color: "#595861",
              fontSize: 12,
            }}
          >
            CARD NUMBER
          </Text>
          <Text style={numbText}>{cardNumb}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    padding: 10,
    width: "100%",
    height: "auto",
    marginRight: 10,
  },
  textWrap: {
    marginTop: 10,
    marginBottom: 10,
    padding: 3,
  },
  numbText: {
    fontSize: 15,
    fontWeight: 700,
  },
  balText: {
    fontSize: 22,
    fontWeight: 700,
  },
});

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
// import ButtonItem from "../../components/button";

export default function Analytics({ items }) {
  const { container, bttnWrap } = styles;

  const [bttnInde, setBttnIndex] = useState(0);

  const buttonGroup = [
    { title: "Weekly" },
    { title: "Monthly" },
    { title: "Yearly" },
  ];

  return (
    <View style={container}>
      <View style={bttnWrap}>
        {/* {buttonGroup.map((item, index) => (
          <ButtonItem key={index} items={item} />
        ))} */}
      </View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bttnWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

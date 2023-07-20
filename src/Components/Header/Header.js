import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Header = ({ text }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "10%",
    backgroundColor: "#FFB507",
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    marginTop: 30,
    fontSize: 25,
    fontFamily: "inter",
  },
});

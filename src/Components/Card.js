import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Card = ({ children, additionalStyle = [] }) => {
  return (
    <View style={[styles.cardContainer, additionalStyle]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 50,
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "firebrick",
    marginVertical: 10,
    borderRadius: 8,
  },
});

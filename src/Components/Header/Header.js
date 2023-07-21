import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Header = ({ route, navigation }) => {
  const texto = () => {
    if (route.name === "Main") {
      return "Selecciona tu categoria";
    }
    if (route.name === "ItemListCategory") {
      return route.params.category;
    }
    if (route.name === "ProductDetail") {
      return route.params.title;
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headText}>{texto()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFB507",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
  },
  headText: {
    marginTop: 30,
    fontSize: 25,
    fontFamily: "inter",
  },
});

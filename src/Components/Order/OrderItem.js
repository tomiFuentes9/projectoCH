import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const OrderItem = ({ order }) => {
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{order.updatedAt}</Text>
        <Text style={styles.text2}>${order.total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: "chocolate",
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "inter",
    fontSize: 17,
    color: "black",
  },
  text2: {
    fontFamily: "inter",
    fontSize: 19,
    color: "black",
  },
});

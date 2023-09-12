import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { removeCartItem } from "../../Features/Cart/cartSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} ({cartItem.quantity})
        </Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
      </View>
      <Pressable onPress={() => dispatch(removeCartItem(cartItem.id))}>
        <Text style={styles.text2}>Eliminar</Text>
      </Pressable>
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
    fontSize: 19,
    color: "black",
  },
  text2: {
    fontFamily: "inter",
    fontSize: 14,
    color: "black",
  },
});

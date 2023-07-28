import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartData from "../Data/cart.json";
import { CartItem } from "../Components/Cart/CartItem";

export const Cart = () => {
  const total = CartData.reduce(
    (counter, currentItem) =>
      (counter += currentItem.price * currentItem.quantity),
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable style={styles.confirmPressable}>
          <Text>Confirm</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmPressable: {
    marginRight: 2,
  },
});

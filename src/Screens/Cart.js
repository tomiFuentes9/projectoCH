import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CartItem } from "../Components/Cart/CartItem";
import { useSelector } from "react-redux";
import { usePostCartMutation } from "../Services/shopServices";

export const Cart = () => {
  const {
    items: CartData,
    total,
    updatedAt,
    user,
  } = useSelector((state) => state.cartReducer.value);

  const [triggerPostCart, result] = usePostCartMutation();

  const handleConfirm = () => {
    triggerPostCart({ total, CartData, user, updatedAt });
  };

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
        <Pressable onPress={handleConfirm} style={styles.confirmPressable}>
          <Text>Confirmar</Text>
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
    backgroundColor: "chocolate",
    shadowColor: "black",
    elevation: 4,
    borderRadius: 15,
    height: 60,
  },
  confirmPressable: {
    marginRight: 2,
    backgroundColor: "burlywood",
    padding: 10,
    borderRadius: 10,
  },
});

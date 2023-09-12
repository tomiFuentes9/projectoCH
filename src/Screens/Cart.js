import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from "react-native";
import React from "react";
import { CartItem } from "../Components/Cart/CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usePostCartMutation } from "../Services/shopServices";
import { clearCart } from "../Features/Cart/cartSlice";

export const Cart = () => {
  const showCartel = () => {
    ToastAndroid.show(
      "Tu orden fue confirmada con exito!! Recibiras los datos del pedido a tu mail",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const {
    items: CartData,
    total,
    updatedAt,
    user,
  } = useSelector((state) => state.cartReducer.value);

  const { email, localId } = useSelector((state) => state.userReducer.value);

  const [triggerPostCart, result] = usePostCartMutation();
  const dispatch = useDispatch();

  const handleConfirm = () => {
    triggerPostCart({ total, CartData, email, updatedAt });
    dispatch(clearCart());
    showCartel();
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

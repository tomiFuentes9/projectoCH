import { FlatList, View } from "react-native";
import React from "react";
import { OrderItem } from "../../Components/Order/OrderItem";
import { useGetOrdersQuery } from "../../Services/shopServices";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const OrderScreen = () => {
  const { data } = useGetOrdersQuery();
  const { email } = useSelector((state) => state.userReducer.value);

  const renderItem = ({ item }) => <OrderItem {...item} />;

  const arrayDeObjetos = () => {
    if (data) {
      const array = Object.keys(data).map((clave) => ({
        [clave]: data[clave],
      }));

      return array;
    }
    return [];
  };

  const filteredOrders = arrayDeObjetos().filter(
    (order) => order.email === email
  );

  console.log(filteredOrders);
  return (
    <View>
      <FlatList
        data={filteredOrders}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={renderItem}
      />
    </View>
  );
};

import { FlatList, View } from "react-native";
import React from "react";
import OrderData from "../../Data/orders.json";
import { OrderItem } from "../../Components/Order/OrderItem";

export const OrderScreen = () => {
  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

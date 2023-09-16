import { FlatList, View } from "react-native";
import React from "react";
import { OrderItem } from "../../Components/Order/OrderItem";
import { useGetOrdersQuery } from "../../Services/shopServices";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const OrderScreen = () => {
  const { data } = useGetOrdersQuery();
  const { email } = useSelector((state) => state.userReducer.value);

  const renderItem = ({ item }) => <OrderItem order={item} />;

  const Ordenes = () => {
    if (data) {
      const array = Object.keys(data).map((clave) => ({
        [clave]: data[clave],
      }));
      return array;
    }
    return [];
  };

  const filteredData = Ordenes().filter((objeto) => {
    const innerObject = Object.values(objeto)[0];
    return innerObject.email === email;
  });

  return (
    <View>
      <FlatList data={filteredData} renderItem={renderItem} />
    </View>
  );
};

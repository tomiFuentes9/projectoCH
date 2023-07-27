import React from "react";
import Header from "../Components/Header/Header";
import { ItemListCategory } from "../Screens/ItemList/ItemListCategory";
import { ProductDetail } from "../Screens/ItemList/ProductDetail";
import { Main } from "../Screens/Main";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

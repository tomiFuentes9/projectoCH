import React from "react";
import Header from "../Components/Header/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../Screens/Cart";

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
};

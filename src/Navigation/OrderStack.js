import React from "react";
import { Header } from "../Components/Header/Header";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderScreen } from "../Screens/Orders/OrderScreen";

const Stack = createNativeStackNavigator();

export const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrderScreen"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
};

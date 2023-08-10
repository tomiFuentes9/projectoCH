import React from "react";
import { Header } from "../Components/Header/Header";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../Screens/Cart";
import { Register } from "../Screens/Register";
import { Login } from "../Screens/Login";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

import { Main } from "../Screens/Main";
import { Header } from "../Components/Header/Header";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { ItemListCategory } from "../Screens/ItemList/ItemListCategory";
import { ProductDetail } from "../Screens/ItemList/ProductDetail";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <View style={styles.home}>
      <NavigationContainer>
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
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});

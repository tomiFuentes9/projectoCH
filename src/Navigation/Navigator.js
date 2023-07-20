import { Main } from "./src/Screens/Main";
import { Header } from "./src/Components/Header/Header";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { ItemListCategory } from "../Screens/ItemList/ItemListCategory";
import { ItemDetail } from "../Screens/ItemList/ItemDetail";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const [actualHeader, setActualHeader] = useState("Products");

  const handleChangeHeader = (text) => {
    setActualHeader(text);
  };

  return (
    <View style={styles.home}>
      <NavigationContainer>
        <Header text={actualHeader} />
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
          <Stack.Screen name="ProductDetail" component={ItemDetail} />
          {/* {!actualCategory ? (
            <Main
              setCategory={setActualCategory}
              changeHeader={handleChangeHeader}
            />
          ) : (
            <ItemListCategory
              category={actualCategory}
              setCategory={setActualCategory}
              changeHeader={handleChangeHeader}
            />
          )} */}
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

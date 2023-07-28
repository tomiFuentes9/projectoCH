import { Main } from "../Screens/Main";
import { Header } from "../Components/Header/Header";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ShopStack } from "./ShopStack";
import { CartStack } from "./CartStack";
import { OrderStack } from "./OrderStack";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <View style={styles.home}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tab,
          }}
        >
          <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
              tabBarIcon: () => {
                return (
                  <View>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
              tabBarIcon: () => {
                return (
                  <View>
                    <Entypo name="shop" size={24} color="black" />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrderStack}
            options={{
              tabBarIcon: () => {
                return (
                  <View>
                    <FontAwesome name="list-ul" size={24} color="black" />
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  tab: {
    backgroundColor: "#b8860b",
    shadowColor: "black",
    elevation: 4,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
});

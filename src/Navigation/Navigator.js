import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ShopStack } from "./ShopStack";
import { CartStack } from "./CartStack";
import { OrderStack } from "./OrderStack";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AuthStack } from "./AuthStack";
import { ProfileStack } from "./ProfileStack";
import { getSession } from "../SQLite";
import { setUser } from "../Features/User/userSlice";

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const { email, localId } = useSelector((state) => state.userReducer.value);
  const cartItems = useSelector((state) => state.cartReducer.value.items);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const session = await getSession();

        if (session?.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log("No fue posible traer la sesión", error.message);
      }
    })();
  }, []);

  return (
    <View style={styles.home}>
      <NavigationContainer>
        {email ? (
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
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <FontAwesome
                        name="shopping-cart"
                        size={24}
                        color={focused ? "white" : "black"}
                      />
                    </View>
                  );
                },
              }}
            />

            <Tab.Screen
              name="Cart"
              component={CartStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <Entypo
                        name="shop"
                        size={24}
                        color={focused ? "white" : "black"}
                      />
                    </View>
                  );
                },
                tabBarBadge: cartItems.length > 0 ? cartItems.length : 0,
                tabBarBadgeStyle: {
                  backgroundColor: "black",
                  color: "white",
                  fontSize: 11,
                },
              }}
            />
            <Tab.Screen
              name="Orders"
              component={OrderStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <FontAwesome
                        name="list-ul"
                        size={24}
                        color={focused ? "white" : "black"}
                      />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <Entypo name="user" size={24} color="black" />
                    </View>
                  );
                },
              }}
            />
          </Tab.Navigator>
        ) : (
          <AuthStack />
        )}
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

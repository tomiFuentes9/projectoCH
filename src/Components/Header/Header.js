import { StyleSheet, Text, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Features/User/userSlice";
import { deleteSession } from "../../SQLite/index";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

export const Header = ({ route, navigation }) => {
  const texto = () => {
    if (route.name === "Main") {
      return "Selecciona tu categoria";
    }
    if (route.name === "ItemListCategory") {
      return route.params.category;
    }
    if (route.name === "ProductDetail") {
      return route.params.title;
    }
  };

  const dispatch = useDispatch();
  const { email, localId } = useSelector((state) => state.userReducer.value);

  const onLogout = async () => {
    try {
      console.log("Deleting session...");
      const response = await deleteSession(localId);
      console.log("Session deleted: ");
      console.log(response);
      dispatch(logOut());
    } catch (error) {
      console.log("Error while sign out:");
      console.log(error.message);
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headText}>{texto()}</Text>
      {email && (
        <Pressable style={styles.logOut} onPress={onLogout}>
          <AntDesign name="logout" size={24} color="black" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFB507",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
  },
  headText: {
    marginTop: 30,
    fontSize: 25,
    fontFamily: "inter",
  },
  logOut: {
    position: "absolute",
    left: 15,
    top: "40%",
  },
});

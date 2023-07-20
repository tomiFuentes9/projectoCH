import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const InputSearch = ({ onSearch, error = "", goBack }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleErase = () => {
    setSearchWord("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Busca un producto"
        value={searchWord}
        onChangeText={setSearchWord}
      />
      <Pressable onPress={() => onSearch(searchWord)}>
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={handleErase}>
        <FontAwesome5 name="eraser" size={24} color="black" />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign name="back" size={24} color="black" />
      </Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: "darksalmon",
    borderRadius: 10,
  },
});

import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";

export const InputBar = ({ input, setInput, handleAdd }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nueva Tarea"
        style={styles.txtInput}
        value={input}
        onChangeText={setInput}
      />
      <Pressable style={styles.inputButton} onPress={handleAdd}>
        <Text style={styles.InputButtonText}>Agrega una tarea</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: "#FFB507",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  txtInput: {
    width: 150,
    borderBottomWidth: 3,
    marginBottom: 3,
    marginRight: 9,
  },
  inputButton: {
    height: 35,
    width: 130,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "aliceblue",
  },
  inputButtonText: {
    textAlign: "center",
    color: "white",
  },
});

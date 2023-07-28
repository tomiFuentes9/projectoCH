import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../Features/Counter/counterSlice";

export const Counter = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.value);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.span}>{count}</Text>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput
          placeholder="Cantidad"
          style={styles.spanInput}
          onChangeText={setTotal}
          value={total}
        />
        <Pressable
          style={styles.button}
          onPress={() => dispatch(incrementByValue(Number(total)))}
        >
          <Text style={styles.buttonText}>Agregar</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Limpiar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "chocolate",
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "coral",
  },
  span: {
    backgroundColor: "darksalmon",
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
  spanInput: {
    backgroundColor: "coral",
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "inter",
  },
});

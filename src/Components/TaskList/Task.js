import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export const Task = ({ item, onPressTask }) => {
  return (
    <Pressable onPress={() => onPressTask(item)}>
      <View style={styles.task} key={item.id}>
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  task: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "chocolate",
    padding: 10,
    marginTop: 10,
  },
  taskText: {
    fontSize: 15,
    color: "black",
  },
});

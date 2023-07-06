import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { Task } from "./Task";

export const TaskList = ({ list, onPressTask }) => {
  return (
    <View style={styles.taskView}>
      <FlatList
        data={list}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task item={item} onPressTask={onPressTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskView: {
    flex: 6,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5,
  },
});

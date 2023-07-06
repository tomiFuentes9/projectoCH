import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { InputBar } from "../Components/InputBar";
import { TaskList } from "../Components/TaskList/TaskList";
import { ModalTask } from "../Components/ModalTask";

export const Main = ({ tasks }) => {
  const [list, setList] = useState(tasks);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({});

  const handleAdd = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      },
    ]);
  };

  const handlePress = (task) => {
    setTaskActive(task);
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <InputBar input={input} setInput={setInput} handleAdd={handleAdd} />
      <TaskList list={list} onPressTask={handlePress} />
      <ModalTask
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        taskActive={taskActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";

export const Main = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.txtInput} />
        <Button title="Agrega una tarea" />
      </View>
      <View style={styles.taskView}>
        <Text>TAREAS</Text>
        {tasks.map((task) => (
          <View style={styles.task} key={task.id}>
            <Text>{task.task}</Text>
          </View>
        ))}
      </View>
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
  inputView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFB507",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  taskView: {
    flex: 7,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5
  },
  txtInput: {
    width: 150,
    borderBottomColor: "deepskyblue",
    borderBottomWidth: 3,
    marginBottom: 3,
    marginRight: 9,
  },
  task: {
    width: "80%",
    alignItems: 'center',
    backgroundColor: "chocolate",
    padding: 10,
    marginTop: 10,
  },
});

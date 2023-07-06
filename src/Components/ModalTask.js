import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

export const ModalTask = ({ modalVisible, setModalVisible, taskActive }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.text}>{taskActive.task}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonListo]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textButton}>Terminada</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonPendiente]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textButton}>Pendiente</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textButton}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    margin: 20,
    backgroundColor: "darksalmon",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    marginLeft: 2,
  },
  buttonListo: {
    backgroundColor: "green",
    marginRight: 2,
  },
  buttonPendiente: {
    backgroundColor: "red",
    marginRight: 2,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  textButton: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

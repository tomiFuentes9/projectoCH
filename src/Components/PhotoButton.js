import { Pressable, StyleSheet, Text } from "react-native";

export const PhotoButton = ({
  title = "",
  onPress = () => {},
  color = "red",
}) => {
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: "coral",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontFamily: "inter",
    fontSize: 18,
    color: "black",
  },
});

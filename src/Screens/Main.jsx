import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { CategoryList } from "./CategoryList/CategoryList";

export const Main = ({ navigation, changeHeader }) => {
  return (
    <View style={styles.container}>
      <CategoryList changeHeader={changeHeader} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    alignItems: "center",
    backgroundColor: "darksalmon",
  },
});

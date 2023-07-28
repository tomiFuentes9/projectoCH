import { StyleSheet, View } from "react-native";
import { CategoryList } from "./CategoryList/CategoryList";
import { Counter } from "../Components/Counter";

export const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Counter />
      <CategoryList navigation={navigation} />
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

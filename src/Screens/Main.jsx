import { StyleSheet, View } from "react-native";
import { CategoryList } from "./CategoryList/CategoryList";

export const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
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

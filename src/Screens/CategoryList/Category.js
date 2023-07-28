import { StyleSheet, Text, View, Pressable } from "react-native";
import { Card } from "../../Components/Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../Features/Shop/shopSlice";

export const Category = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const handleSelectCategory = () => {
    dispatch(setCategorySelected(item));
    navigation.navigate("ItemListCategory", { category: item });
  };

  return (
    <Pressable onPress={handleSelectCategory}>
      <Card>
        <Text style={styles.categoryText}>{item}</Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 15,
    color: "black",
  },
});

import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Card } from "./Card";
import { useDispatch } from "react-redux";
import { setProductSelected } from "../Features/Shop/shopSlice";

export const Product = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setProductSelected(item));
    navigation.navigate("ProductDetail", {
      product: item.id,
      title: item.title,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <Card additionalStyle={styles.additionalStylesCard}>
        <Text>{item.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item.images[0] }}
        />
      </Card>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
  },
});

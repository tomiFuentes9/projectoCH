import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import products from "../../Data/products.json";
import { useSelector } from "react-redux";

export const ProductDetail = ({ navigation, route }) => {
  const { product: idSelected } = route.params;

  const productSelected = useSelector(
    (state) => state.shopReducer.value.productSelected
  );

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Volver" />
      {productSelected && (
        <View style={styles.container}>
          <Image
            source={{ uri: productSelected.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{productSelected.title}</Text>
            <Text style={styles.text}>{productSelected.description}</Text>
            <Text style={styles.text}>${productSelected.price}</Text>
            <Button title="Añadir al carrito"></Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 300,
    height: 250,
  },
  textContainer: {
    padding: 10,
    flexDirection: "column",
  },
  text: {
    fontSize: 20,
  },
});

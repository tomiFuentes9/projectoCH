import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import products from "../../Data/products.json";

export const ProductDetail = ({ navigation, route }) => {
  const { product: idSelected } = route.params;

  const [product, setProduct] = useState("");

  useEffect(() => {
    //Encontrar el producto por su id
    const productSelected = products.find(
      (producto) => producto.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected]);

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Volver" />
      {product && (
        <View style={styles.container}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{product.title}</Text>
            <Text style={styles.text}>{product.description}</Text>
            <Text style={styles.text}>${product.price}</Text>
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

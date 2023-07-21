import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import products from "../../Data/products.json";
import { Product } from "../../Components/Product";
import { InputSearch } from "../../Components/Header/InputSearch";

export const ItemListCategory = ({ navigation, route }) => {
  const [actualProducts, setActualProducts] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [error, setError] = useState("");

  const { category } = route.params;

  const handleBack = () => {
    navigation.navigate("Main");
  };

  const handleSearch = (input) => {
    const validExpression = /^[a-zA-Z0-9\ ]*$/; // Limito los caracteres que se pueden usar
    const verification = validExpression.test(input); // Verifico si es valido el input

    if (verification) {
      setSearchWord(input);
      setError("");
    } else {
      console.log("Solo letras y números");
      setError("Solo letras y números");
    }
  };

  useEffect(() => {
    const productsFiltered = products.filter(
      (producto) =>
        producto.category === category && //Si el producto esta dentro de la categoria deseada
        producto.title.toLocaleLowerCase().includes(searchWord.toLowerCase()) // si el nombre del producto incluye la palabra ingresada en el input
    );
    setActualProducts(productsFiltered);
  }, [category, searchWord]);

  return (
    <View style={styles.container}>
      <InputSearch onSearch={handleSearch} error={error} goBack={handleBack} />
      <FlatList
        data={actualProducts}
        keyExtractor={(producto) => producto.id}
        renderItem={({ item }) => (
          <Product item={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
  },
});

import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { Category } from "./Category";
import { useGetCategoriesQuery } from "../../Services/shopServices";

export const CategoryList = ({ navigation }) => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();
  return (
    <View style={styles.categoryView}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Category item={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryView: {
    flex: 6,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5,
  },
});

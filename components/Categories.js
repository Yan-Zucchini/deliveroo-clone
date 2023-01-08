import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = ({ imgUrl, title }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="testing1 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="testing2 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="testing3 "
      />
    </ScrollView>
  );
};
export default Categories;

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
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing1 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing2 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing4 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing5 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing6 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing7 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing8 "
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing9 "
      />
    </ScrollView>
  );
};
export default Categories;

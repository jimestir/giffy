import React from "react";
import {
  CategoryLink,
  CategoryList,
  CategoryListItem,
  CategoryTitle,
} from "./style";

function Category({ name, options = [] }) {
  return (
    <>
      <CategoryTitle as="h2">{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => {
          return (
            <CategoryListItem key={singleOption} index={index}>
              <CategoryLink to={`/search/${singleOption}`}>
                {singleOption}
              </CategoryLink>
            </CategoryListItem>
          );
        })}
      </CategoryList>
    </>
  );
}

export default Category;

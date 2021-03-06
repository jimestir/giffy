import React from "react";
import {
  CategoryLink,
  CategoryList,
  CategoryListItem,
  CategoryTitle,
} from "./styled";

function Category({ name, options = [] }) {
  return (
    <>
      <CategoryTitle>{name}</CategoryTitle>
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

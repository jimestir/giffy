import styled from "styled-components";
import { Link } from "wouter";

export const CategoryTitle = styled.h2`
  border-bottom: solid 3px ${(props) => props.theme.colors.brand_color_2};
  display: inline;
  font-family: ${(props) => props.theme.font.title};
  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: normal;
  margin-bottom: ${(props) => props.theme.margins.m};
`;

export const CategoryList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.font.text};
  font-weight: 100;
  justify-content: center;
  line-height: 25px;
  list-style: none;
  padding-bottom: ${(props) => props.theme.paddings.m};
  padding-left: ${(props) => props.theme.paddings.m};
  padding-right: ${(props) => props.theme.paddings.m};
`;
export const CategoryListItem = styled.li`
  font-size: 1.2rem;
  margin: 0.1rem;
  padding: 0.3rem;
`;

export const CategoryLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.brand_color_5};
  }
`;

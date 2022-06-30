import styled from "styled-components";
import { Link } from "wouter";
import { Title } from "styledComponents";

export const CategoryTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSizes.s};
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
  list-style: none;
  padding-bottom: ${(props) => props.theme.paddings.m};
  padding-left: ${(props) => props.theme.paddings.m};
  padding-right: ${(props) => props.theme.paddings.m};
`;
export const CategoryListItem = styled.li`
  font-size: ${(props) => props.theme.fontSizes.xs};
  margin: ${(props) => props.theme.margins.xs};
`;

export const CategoryLink = styled(Link)`
  color: ${(props) => props.theme.colors.textColor};
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.brand_color_5};
  }
`;

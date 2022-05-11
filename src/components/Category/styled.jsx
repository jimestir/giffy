import styled from "styled-components";
import { Link } from "wouter";

export const CategoryTitle = styled.h3`
  font-weight: bold;
  margin: 20px 0;
  text-align: center;
`;
export const CategoryList = styled.ul`
  line-height: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const CategoryListItem = styled.li`
  padding: 0.3rem;
  margin: 0.1rem;
  font-size: 1.2rem;
`;

export const CategoryLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #008899;
  }
`;

import styled from "styled-components";
import { Link } from "wouter";
import { colors, grid } from "./Theme";

const Logo = styled.img`
  border-radius: 15px;
  box-shadow: 2px 2px 8px rgba(100, 100, 100, 0.5);
  cursor: pointer;
  transform: scale(0.7);
  transition: transform 0.5s;

  &:hover {
    transform: scale(0.8);
  }
`;

const Section = styled.section`
  align-items: center;
  background-color: ${colors.background};
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ListOfGifsStyled = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: 250px;
  grid-gap: ${grid.gridList_gap};
  grid-template-columns: repeat(
    auto-fill,
    minmax(${grid.gridList_column}, 1fr)
  );
  grid-template-rows: masonry;
  margin-top: 50px;
  min-height: 100vh;
  width: 90%;
`;

const GifStyled = styled.div`
  position: relative;

  & img {
    border-radius: 15px;
    object-fit: cover;
    transition: transform 0.3s;
    vertical-align: top;
    width: 100%;
    &:hover {
      transform: scale(1.02);
    }
  }
  & h4 {
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    color: #fff;
    font-size: 10px;
    margin: 0;
    position: absolute;
  }
`;

const Ul = styled.ul`
  line-height: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #008899;
  }
`;

export { Logo, Section, GifStyled, ListOfGifsStyled, Ul, LinkStyled };

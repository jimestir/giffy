import styled from "styled-components";

const ListOfGifsStyled = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-gap: ${(props) => props.theme.grid.gridList_gap};
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.theme.grid.gridList_column}, 1fr)
  );
  grid-template-rows: masonry;
  min-height: 100vh;
  align-items: center;
  width: 90%;
`;

export { ListOfGifsStyled };

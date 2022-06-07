import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  width: 90%;
  @media ${(props) => props.theme.device.laptop} {
    align-items: center;
    flex-direction: column;
  }
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TitleHome = styled.h1`
  border-bottom: 3px solid #05889980;
  display: inline;
  font-family: ${(props) => props.theme.font.title};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: normal;
`;

export const Aside = styled.aside`
  flex-shrink: 1;
  margin-left: 10px;
  width: 200px;
  @media ${(props) => props.theme.device.laptop} {
    margin-left: 0;
    margin: 20px 0 10px 0;
    width: 100%;
  }
`;

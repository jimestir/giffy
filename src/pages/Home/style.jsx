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

export const Aside = styled.aside`
  flex-shrink: 1;
  margin-left: ${(props) => props.theme.margins.s};
  width: 200px;
  margin-top: ${(props) => props.theme.margins.m};
  @media ${(props) => props.theme.device.laptop} {
    margin-left: 0;
    margin: ${(props) => props.theme.margins.xl} 0
      ${(props) => props.theme.margins.m} 0;
    width: 100%;
  }
`;

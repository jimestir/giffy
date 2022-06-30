import styled from "styled-components";

const Logo = styled.img`
  border-radius: 15px;
  cursor: pointer;
  transform: scale(0.7);
  transition: transform 0.5s;

  &:hover {
    transform: scale(0.8);
  }
`;

const LayoutContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.backdrop};
  color: ${(props) => props.theme.colors.textColor};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  border-bottom: solid 3px ${(props) => props.theme.colors.brand_color_2};
  display: inline;
  font-family: ${(props) => props.theme.font.title};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: normal;
`;

const SpinnerContainer = styled.div.attrs((props) => ({
  height: props.height,
}))`
  align-items: center;
  display: flex;
  height: ${(props) => props.height};
  justify-content: center;
`;


export { Logo, LayoutContainer, SpinnerContainer, Title };

import styled from "styled-components";

const Form = styled.form`
  align-items: center;
  background: linear-gradient(
    to left,
    ${(props) => props.theme.colors.brand_color_3} 20%,
    ${(props) => props.theme.colors.brand_color_1}
  );
  border-radius: 30px;
  border: ${(props) => props.theme.colors.brand_color_3} solid 2px;
  display: flex;
  height: 45px;
  margin-bottom: ${(props) => props.theme.margins.xl};
  width: 500px;
  @media ${(props) => props.theme.device.tablet} {
    width: 350px;
  }
  & > input {
    background-color: transparent;
    border: transparent;
    color: white;
    flex-grow: 4;
    font-family: ${(props) => props.theme.font.text};
    font-size: ${(props) => props.theme.fontSizes.xs};
    outline: none;
    padding-left: ${(props) => props.theme.paddings.m};
  }
  & > button {
    background-color: ${(props) => props.theme.colors.brand_color_4};
    border-radius: 50px;
    border: none;
    color: white;
    flex-grow: 1;
    font-family: ${(props) => props.theme.font.text};
    font-size: ${(props) => props.theme.fontSizes.xs};
    height: 40px;
    margin-right: 2.5px;
    width: 30px;
    &:hover {
      background-color: ${(props) => props.theme.colors.brand_color_5};
    }
    @media ${(props) => props.theme.device.tablet} {
      width: 60px;
    }
  }
`;

export { Form };

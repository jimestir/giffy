import styled from "styled-components";

const Form = styled.form`
  align-items: center;
  background: linear-gradient(to left, #333333 20%, #05889980);
  border-radius: 30px;
  border: #333333 solid 2px;
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
    padding-left: 20px;
  }
  & > button {
    background-color: ${(props) => props.theme.colors.brand_color_4};
    border-radius: 50px;
    border: none;
    color: white;
    cursor: pointer;
    flex-grow: 1;
    font-family: ${(props) => props.theme.font.text};
    font-size: ${(props) => props.theme.fontSizes.s};
    font-weight: bold;
    font-weight: normal;
    height: 40px;
    margin-right: 2px;
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

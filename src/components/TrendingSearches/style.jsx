import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  background: linear-gradient(
    to top,
    ${(props) => props.theme.colors.brand_color_3} 85%,
    ${(props) => props.theme.colors.brand_color_1}
  );
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 30px;
  @media ${(props) => props.theme.device.laptop} {
    background: linear-gradient(
      to top,
      ${(props) => props.theme.colors.brand_color_3} 60%,
      ${(props) => props.theme.colors.brand_color_1}
    );
  }
`;

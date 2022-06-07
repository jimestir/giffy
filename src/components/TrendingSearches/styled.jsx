import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  background: linear-gradient(to top, #333333 85%, #05889980);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 20px;
  @media ${(props) => props.theme.device.laptop} {
    background: linear-gradient(to top, #333333 60%, #05889980);
  }
`;

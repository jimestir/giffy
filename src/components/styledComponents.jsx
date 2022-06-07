import styled from "styled-components";

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
  background-color: #282c34;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export { Logo, Section };

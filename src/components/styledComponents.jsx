import styled from "styled-components";

const Div = styled.div`
  color: #fff;
  background-color: #282c34;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const StyledGif = styled.a`
  border: solid 1px #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #eee;
  & > img {
    object-fit: cover;
  }
  & > h4 {
    margin: 0;
  }
`;

export { Div, Section, StyledGif };

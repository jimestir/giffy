import styled from "styled-components";

const GifStyled = styled.div`
  position: relative;

  & img {
    border-radius: 15px;
    object-fit: cover;
    overflow: hidden;
    transition: transform 0.3s;
    vertical-align: top;
    width: 100%;
    &:hover {
      transform: scale(1.02);
    }
  }
  & h4 {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    bottom: 0;
    color: #fff;
    font-size: 10px;
    margin: 0;
    padding: 1px 5px;
    position: absolute;
  }
`;

export { GifStyled };

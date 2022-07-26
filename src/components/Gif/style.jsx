import styled from "styled-components";

const GifStyled = styled.div`
  position: relative;

  & img {
    border-radius: 10px;
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
    color: ${(props) => props.theme.colors.textColor};
    font-size: 0.5rem;
    margin: 0;
    padding: ${(props) => props.theme.paddings.xs};
    position: absolute;
  }
`;

export { GifStyled };

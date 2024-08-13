import styled from "styled-components";

interface BaseCardWrapProps {
  colorhex: string;
}

export const BaseCard = styled.div<BaseCardWrapProps>`
  padding: 10px;
  border: 1px solid ${(props) => props.colorhex};

  h2 {
    padding: 5px;
    border-bottom: 1px solid ${(props) => props.colorhex};
  }

  p {
    padding: 10px;
  }
`;

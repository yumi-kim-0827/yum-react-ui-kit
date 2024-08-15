import styled from "styled-components";

interface GradientCardWrapProps {
  colorhex: string;
  subcolorhex: string;
}

export const GradientCard = styled.div<GradientCardWrapProps>`
  padding: 10px;
  color: #fff;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.colorhex},
    ${(props) => props.subcolorhex}
  );

  h2 {
    padding: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.356);
  }

  p {
    padding: 10px;
  }
`;

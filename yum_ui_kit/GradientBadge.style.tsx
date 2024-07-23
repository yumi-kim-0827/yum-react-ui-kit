import styled from "styled-components";

interface GradientBadgeProps {
  colorhex: string;
  subcolorhex: string;
}

export const GradientBadge = styled.span<GradientBadgeProps>`
  padding: 4px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.colorhex},
    ${(props) => props.subcolorhex}
  );
  background-size: 150% 100%;
  transition: background 0.4s ease-in-out;
  &:hover {
    background-position: 100% 0;
  }
`;

import styled from "styled-components";

interface RoundBadgeProps {
  colorhex: string;
}

export const RoundBadge = styled.span<RoundBadgeProps>`
  padding: 4px;
  font-size: 14px;
  border-radius: 200px;
  color: #fff;
  background-color: ${(props) => props.colorhex};
`;

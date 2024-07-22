import styled from "styled-components";

interface BaseBadgeProps {
  colorhex: string;
}

export const BaseBadge = styled.span<BaseBadgeProps>`
  padding: 4px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.colorhex};
`;

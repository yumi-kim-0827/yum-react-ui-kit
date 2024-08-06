import styled from "styled-components";

interface BottomBorderBadgeProps {
  colorhex: string;
}

export const BottomBorderBadge = styled.span<BottomBorderBadgeProps>`
  padding: 4px;
  font-size: 14px;
  border: 1px solid ${(props) => props.colorhex};
  border-left: 3px solid ${(props) => props.colorhex};
`;

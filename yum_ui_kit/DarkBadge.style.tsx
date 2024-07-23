import styled from "styled-components";

interface DarkBadgeProps {
  colorhex: string;
}

export const DarkBadge = styled.span<DarkBadgeProps>`
  padding: 4px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => props.colorhex};
`;

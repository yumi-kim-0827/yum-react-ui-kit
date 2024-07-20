import styled from "styled-components";

interface BorderAlertProps {
  colorhex: string;
}

export const BorderAlert = styled.div<BorderAlertProps>`
  padding: 10px;
  color: ${(props) => props.colorhex};
  border: 1px solid #d3d3d3;
  border-left: 3px solid ${(props) => props.colorhex};
`;

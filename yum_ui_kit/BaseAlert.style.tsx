import styled from "styled-components";

interface BaseAlertProps {
  colorhex: string;
}

export const BaseAlert = styled.div<BaseAlertProps>`
  padding: 10px;
  color: ${(props) => props.colorhex};
  border: 1px solid ${(props) => props.colorhex};
`;

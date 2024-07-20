import styled from "styled-components";

interface BorderTableWrapProps {
  colorhex: string;
}

export const BorderTable = styled.table<BorderTableWrapProps>`
  width: 100%;
  text-align: left;
  border-spacing: 0;
  border-top: 3px solid ${(props) => props.colorhex};
  overflow: hidden;
  th,
  td {
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.colorhex};
  }
`;

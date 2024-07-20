import styled from "styled-components";

interface RoundTableWrapProps {
  colorhex: string;
}

export const RoundTable = styled.table<RoundTableWrapProps>`
  width: 100%;
  text-align: left;
  border-radius: 10px;
  border-spacing: 0;
  overflow: hidden;
  thead {
    border-radius: 10px;
    background-color: ${(props) => props.colorhex};
  }
  tbody tr td {
    border-bottom: 1px solid ${(props) => props.colorhex};
  }
  th,
  td {
    padding: 10px;
  }
`;

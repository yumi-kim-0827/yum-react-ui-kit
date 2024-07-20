import styled from "styled-components";

interface DarkTableWrapProps {
  colorhex: string;
  subcolorhex: string;
}

export const DarkTable = styled.table<DarkTableWrapProps>`
  width: 100%;
  text-align: left;
  color: #fff;
  background-color: ${(props) => props.colorhex};
  thead {
    background-color: ${(props) => props.subcolorhex};
  }
  th,
  td {
    padding: 10px;
    border: 1px solid #e2e2e2;
  }
`;

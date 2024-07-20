import styled from "styled-components";

interface BaseTableWrapProps {
  colorhex: string;
}

export const BaseTable = styled.table<BaseTableWrapProps>`
  width: 100%;
  text-align: left;

  thead {
    color: #fff;
    background-color: ${(props) => props.colorhex};
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #e2e2e2;
  }
`;

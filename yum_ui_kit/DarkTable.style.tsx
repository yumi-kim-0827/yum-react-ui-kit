import styled from "styled-components";

interface DarkTableWrapProps {
  colorhex: string;
  subcolorhex: string;
}

const DarkTableWrap = styled.div<DarkTableWrapProps>`
  table {
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
  }
`;

export const DarkTable: React.FC<DarkTableWrapProps> = ({
  colorhex,
  subcolorhex,
}) => {
  return (
    <DarkTableWrap colorhex={colorhex} subcolorhex={subcolorhex}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dames</td>
            <td>light</td>
            <td>YUM08271</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Foria</td>
            <td>marvin</td>
            <td>YUM08272</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Elisa</td>
            <td>gallian</td>
            <td>YUM08273</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Larry</td>
            <td>treasure</td>
            <td>YUM08274</td>
          </tr>
        </tbody>
      </table>
    </DarkTableWrap>
  );
};

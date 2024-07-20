import styled from "styled-components";

interface BorderTableWrapProps {
  colorhex: string;
}

const BorderTableWrap = styled.div<BorderTableWrapProps>`
  table {
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
  }
`;

export const BorderTable: React.FC<BorderTableWrapProps> = ({ colorhex }) => {
  return (
    <BorderTableWrap colorhex={colorhex}>
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
    </BorderTableWrap>
  );
};

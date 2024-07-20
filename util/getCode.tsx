export const getCode = (
  componentName: string,
  colorhex: string,
  subcolorhex: string
) => {
  switch (componentName) {
    //BaseButton
    case "BaseButton":
      return `
            import styled from "styled-components";

            export const BaseButton = styled.button\`
              padding: 20px;
              width: 100%;
              max-width: 200px;
              cursor: pointer;
              color: #fff;
              font-weight: bold;
              border-radius: 200px;
              transition: background 0.4s ease-in-out;
              background-color: ${colorhex};
              &:hover {
                background-color: ${subcolorhex};
              }
              \`;
                  `;
    //GradientButton
    case "GradientButton":
      return `
            import styled from "styled-components";

            export const GradientButton = styled.button\`
              padding: 20px;
              width: 100%;
              max-width: 200px;
              cursor: pointer;
              color: #fff;
              font-weight: bold;
              border-radius: 200px;
              background-image: linear-gradient(
                90deg,
                ${colorhex},
                ${subcolorhex}
              );
              background-size: 150% 100%;
              transition: background 0.4s ease-in-out;
              &:hover {
                background-position: 100% 0;
              }
            \`;
                `;
    //OutlineButton
    case "OutlineButton":
      return `
            import styled from "styled-components";

            export const OutlineButton = styled.button\`
              padding: 20px;
              width: 100%;
              max-width: 200px;
              cursor: pointer;
              color: #fff;
              font-weight: bold;
              border-radius: 200px;
              border: 1px solid transparent;
              background: linear-gradient(#fff, #fff) padding-box,
                linear-gradient(
                  90deg,
              ${colorhex},
              ${subcolorhex}
                )
              border-box;
              background-size: 150% 100%;
              transition: background 0.4s ease-in-out;
              &:hover {
                background-position: 100% 0;
              }
            \`;
                `;
    //BaseInput
    case "BaseInput":
      return `
            import styled from "styled-components";

            export const BaseInput = styled.input\`
              padding: 20px;
              width: 100%;
              border: 1px solid ${colorhex};
              &:focus {
              border-bottom: 3px solid ${colorhex};
              }
            \`;
                `;
    //BaseTextArea
    case "BaseTextArea":
      return `
            import styled from "styled-components";

            export const BaseTextArea = styled.textarea\`
              padding: 20px;
              width: 100%;
              max-height: 100px;
              border: 1px solid ${colorhex};
              &:focus {
                border-bottom: 3px solid ${colorhex};
              }
              resize: none;
              \`;
                  `;
    //FileInput
    case "FileInput":
      return `
              import styled from "styled-components";

              export const FileInput = styled.input.attrs({
                type: "file",
                accept: "image/png, image/jpeg",
              })\`
                padding: 20px;
                background-color: #fff;
                border: 1px solid ${colorhex};
                input {
                  display: none;
                }
              \`;
              `;
    //BaseTable
    case "BaseTable":
      return `
      import styled from "styled-components";
      
      export const BaseTable = styled.table\`
        width: 100%;
        text-align: left;
      
        thead {
          color: #fff;
          background-color: ${colorhex};
        }
      
        th,
        td {
          padding: 10px;
          border: 1px solid #e2e2e2;
        }
        \`;

        ** BaseTable 사용하기
        return (
          <BaseTable>
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
          </BaseTable>
        )
        `;
    //DarkTable
    case "DarkTable":
      return `
      import styled from "styled-components";
      
      export const DarkTable = styled.table\`
      width: 100%;
      text-align: left;
      color: #fff;
      background-color: ${colorhex};
      thead {
        background-color: ${subcolorhex};
      }
      th,
      td {
        padding: 10px;
        border: 1px solid #e2e2e2;
      }
        \`;
        
        ** DarkTable 사용하기
        return (
          <DarkTable>
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
          </DarkTable>
        )
        `;
    //RoundTable
    case "RoundTable":
      return `
      import styled from "styled-components";
      
      export const RoundTable = styled.table\`
      width: 100%;
      text-align: left;
      border-radius: 10px;
      border-spacing: 0;
      overflow: hidden;
      thead {
        border-radius: 10px;
        background-color: ${colorhex};
      }
      tbody tr td {
        border-bottom: 1px solid ${colorhex};
      }
      th,
      td {
        padding: 10px;
      }
        \`;
        
        ** RoundTable 사용하기
        return (
          <RoundTable>
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
          </RoundTable>
        )
        `;
    //BorderTable
    case "BorderTable":
      return `
      import styled from "styled-components";
      
      export const BorderTable = styled.table\`
      width: 100%;
      text-align: left;
      border-spacing: 0;
      border-top: 3px solid ${colorhex};
      overflow: hidden;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid ${colorhex};
      }
        \`;
        
        ** BorderTable 사용하기
        return (
          <BorderTable>
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
          </BorderTable>
        )
        `;
  }
};

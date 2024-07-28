export const getBlock = (componentName: string, codeSnippet: any) => {
  switch (componentName) {
    //BaseButton
    case "BaseButton":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BaseButton>버튼 텍스트</BaseButton>;
    </>
  );
};

export default ExampleComponent;`;
    //GradientButton
    case "GradientButton":
      return `
      ${codeSnippet}
\`;
                `;
    //OutlineButton
    case "OutlineButton":
      return `
      ${codeSnippet}
\`;
                `;
    //BaseInput
    case "BaseInput":
      return `
      ${codeSnippet}
\`;
                `;
    //BaseTextArea
    case "BaseTextArea":
      return `
      ${codeSnippet}
  resize: none;
\`;
                  `;
    //FileInput
    case "FileInput":
      return `
      ${codeSnippet}
\`
              `;
    //BaseAlert
    case "BaseAlert":
      return `
      ${codeSnippet}
\`
              `;
    //BorderAlert
    case "BorderAlert":
      return `
      ${codeSnippet}
\`
              `;
    //BaseTable
    case "BaseTable":
      return `
      ${codeSnippet}
  \`;
---------------------------  
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
      ${codeSnippet}
  \`;
---------------------------    
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
      ${codeSnippet}
  \`;
---------------------------  
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
      ${codeSnippet}
  \`;
---------------------------    
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
    //BaseBadge
    case "BaseBadge":
      return `
      ${codeSnippet}
\`;
        `;
    //DarkBadge
    case "DarkBadge":
      return `
      ${codeSnippet}
\`;
        `;
    //GradientBadge
    case "GradientBadge":
      return `
      ${codeSnippet}
\`;
        `;
  }
};

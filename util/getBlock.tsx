export const getBlock = (componentName: string, codeSnippet: any) => {
  switch (componentName) {
    //BaseButton
    case "BaseButton":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BaseButton>텍스트</BaseButton>;
    </>
  );
};

export default ExampleComponent;`;
    //GradientButton
    case "GradientButton":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <GradientButton>텍스트</GradientButton>;
    </>
  );
};

export default ExampleComponent;`;
    //OutlineButton
    case "OutlineButton":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <OutlineButton>텍스트</OutlineButton>;
    </>
  );
};

export default ExampleComponent;`;
    //BaseInput
    case "BaseInput":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BaseInput />;
    </>
  );
};

export default ExampleComponent;`;
    //BaseTextArea
    case "BaseTextArea":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BaseTextArea />;
    </>
  );
};

export default ExampleComponent;`;
    //FileInput
    case "FileInput":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <FileInput />;
    </>
  );
};

export default ExampleComponent;`;
    //BaseAlert
    case "BaseAlert":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BaseAlert>텍스트</BaseAlert>;
    </>
  );
};

export default ExampleComponent;`;
    //BorderAlert
    case "BorderAlert":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BorderAlert>텍스트</BorderAlert>;
    </>
  );
};

export default ExampleComponent;`;
    //BaseTable
    case "BaseTable":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
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
      </BaseTable>;
    </>
  );
};

export default ExampleComponent;`;
    //DarkTable
    case "DarkTable":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
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
      </DarkTable>;
    </>
  );
};

export default ExampleComponent;`;
    //RoundTable
    case "RoundTable":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
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
      </RoundTable>;
    </>
  );
};

export default ExampleComponent;`;
    //BorderTable
    case "BorderTable":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
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
      </BorderTable>;
    </>
  );
};
export default ExampleComponent;`;
    //BaseBadge
    case "BaseBadge":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BaseBadge>텍스트</BaseBadge>;
    </>
  );
};

export default ExampleComponent;`;
    //DarkBadge
    case "DarkBadge":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <DarkBadge>텍스트</DarkBadge>;
    </>
  );
};

export default ExampleComponent;`;
    //GradientBadge
    case "GradientBadge":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <GradientBadge>텍스트</GradientBadge>;
    </>
  );
};

export default ExampleComponent;`;
    //RoundBadge
    case "RoundBadge":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <RoundBadge>텍스트</RoundBadge>;
    </>
  );
};

export default ExampleComponent;`;
    //BottomBorderBadge
    case "BottomBorderBadge":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BottomBorderBadge>텍스트</BottomBorderBadge>;
    </>
  );
};

export default ExampleComponent;`;
  }
};

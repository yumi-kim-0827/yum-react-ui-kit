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
    //BaseCard
    case "BaseCard":
      return `${codeSnippet}
const ExampleComponent = () => {
  return (
    <>
      <BaseCard>
        <h2>카드 제목</h2>
        <p>
        오늘은 햇살이 반짝이는 예쁜 날이었다. 아침 일찍 일어나 창문을 열자, 귀여운 참새 한 마리가 내 창가에 앉아 나를 반기듯 짹짹거렸다. 작은 눈동자를 반짝이며 나를 바라보는 모습이 어찌나 사랑스러운지, 잠시 넋을 놓고 바라봤다. 참새는 잠시 후 날아갔지만, 그 작은 친구 덕분에 하루가 더 환하게 시작된 것 같았다. 오늘은 모든 게 잘 풀릴 것 같은 기분이 들었다. 간단한 아침을 먹고, 햇살을 듬뿍 받으며 산책을 다녀와야겠다.
        </p>
     </BaseCard>
    </>
  );
};

export default ExampleComponent;`;
  }
};

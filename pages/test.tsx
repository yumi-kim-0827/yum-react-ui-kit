import styled from "styled-components";

export const GradientCard = styled.div`
  padding: 10px;
  color: #fff;
  background-image: linear-gradient(90deg, #982c64, #5628fa);

  h2 {
    padding: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.356);
  }

  p {
    padding: 10px;
  }
`;

const ExampleComponent = () => {
  return (
    <>
      <GradientCard>
        <h2>카드 제목</h2>
        <p>
          오늘은 햇살이 반짝이는 예쁜 날이었다. 아침 일찍 일어나 창문을 열자,
          귀여운 참새 한 마리가 내 창가에 앉아 나를 반기듯 짹짹거렸다. 작은
          눈동자를 반짝이며 나를 바라보는 모습이 어찌나 사랑스러운지, 잠시 넋을
          놓고 바라봤다. 참새는 잠시 후 날아갔지만, 그 작은 친구 덕분에 하루가
          더 환하게 시작된 것 같았다. 오늘은 모든 게 잘 풀릴 것 같은 기분이
          들었다. 간단한 아침을 먹고, 햇살을 듬뿍 받으며 산책을 다녀와야겠다.
        </p>
      </GradientCard>
    </>
  );
};

export default ExampleComponent;

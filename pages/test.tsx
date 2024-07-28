import styled from "styled-components";

export const BaseButton = styled.button`
  padding: 20px;
  width: 100%;
  max-width: 200px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  border-radius: 200px;
  transition: background 0.4s ease-in-out;
  background-color: #982c64;
  &:hover {
    background-color: #5628fa;
  }
`;

const ExampleComponent = () => {
  return (
    <>
      <BaseButton>버튼 텍스트</BaseButton>;
    </>
  );
};

export default ExampleComponent;

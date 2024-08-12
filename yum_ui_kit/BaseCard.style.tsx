import styled from "styled-components";

interface BaseCardProps {
  colorhex: string;
  title: string;
  content: string;
}

const BaseCardWrap = styled.div<{ colorhex: string }>`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.colorhex};
`;

const CardTitle = styled.h2<{ colorhex: string }>`
  border-bottom: 1px solid ${(props) => props.colorhex};
`;

const CardContent = styled.p`
  padding: 10px;
  color: #333333;
`;

export const BaseCard: React.FC<BaseCardProps> = ({
  colorhex,
  title,
  content,
}) => {
  return (
    <BaseCardWrap colorhex={colorhex}>
      <CardTitle colorhex={colorhex}>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </BaseCardWrap>
  );
};

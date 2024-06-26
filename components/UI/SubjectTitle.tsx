import React from "react";
import styled from "styled-components";

interface SubjectTitleProps {
  title: string;
  text: string;
}

const SubjectTitleBox = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  p {
    color: rgba(0, 0, 0, 0.7);
  }
  @media ${({ theme }) => theme.device.small} {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;
const SubjectTitle: React.FC<SubjectTitleProps> = ({ title, text }) => {
  return (
    <SubjectTitleBox>
      <h2>{title}</h2>
      <p>{text}</p>
    </SubjectTitleBox>
  );
};

export default SubjectTitle;

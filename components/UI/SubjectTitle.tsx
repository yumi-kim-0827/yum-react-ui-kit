import React from "react";
import styled from "styled-components";

interface SubjectTitleProps {
  title: string;
  text: string;
}

const SubjectTitleBox = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  p {
    color: rgba(0, 0, 0, 0.7);
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

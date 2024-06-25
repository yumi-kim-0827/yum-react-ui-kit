import React from "react";
import styled from "styled-components";

interface GridColumnProps {
  column: string;
  place?: string;
}

const Section = styled.section<GridColumnProps>`
  padding: 20px 0;
  display: grid;
  grid-template-columns: ${(props) => props.column || "1fr"};
  place-items: ${(props) => props.place || "start"};
  gap: 20px;
`;

const Grid: React.FC<GridColumnProps & { children: React.ReactNode }> = ({
  column,
  place,
  children,
}) => {
  return (
    <Section column={column} place={place}>
      {children}
    </Section>
  );
};

export default Grid;

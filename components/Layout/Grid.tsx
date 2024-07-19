import React from "react";
import styled from "styled-components";

interface GridColumnProps {
  $column: string;
  $place?: string;
}

const GridWrap = styled.div<GridColumnProps>`
  position: relative;
  padding: 20px 0;
  display: grid;
  grid-template-columns: ${({ $column }) => $column || "1fr"};
  place-items: ${({ $place }) => $place || "start"};
  gap: 20px;
  @media ${({ theme }) => theme.device.small} {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Grid: React.FC<GridColumnProps & { children: React.ReactNode }> = ({
  $column,
  $place,
  children,
}) => {
  return (
    <GridWrap $column={$column} $place={$place}>
      {children}
    </GridWrap>
  );
};

export default Grid;

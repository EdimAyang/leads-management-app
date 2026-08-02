import styled from "styled-components";
import { ReactNode } from "react";

type GridProps = {
  columns?: number;
  gap?: string;
};

type Props = {
  children: ReactNode;
  columns?: number;
  gap?: string;
};

export default function Grid({ children, columns = 2, gap = "24px" }: Props) {
  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
}
export const StyledGrid = styled.div<GridProps>`
  display: grid;

  grid-template-columns: repeat(
    ${({ columns = 2 }) => columns},
    minmax(0, 1fr)
  );

  gap: ${({ gap = "24px" }) => gap};

  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

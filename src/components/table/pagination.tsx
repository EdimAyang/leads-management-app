import { ChevronLeft, ChevronRight } from "lucide-react";
import styled, { css } from "styled-components";

type PaginationProps = {
  page: number;
  totalPages: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  page,
  totalPages,
  total,
  limit,
  onPageChange,
}: PaginationProps) => {
  const start = total === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Container>
      <Info>
        Showing {start}-{end} of {total}
      </Info>

      <Pages>
        <Button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
          <ChevronLeft size={18} />
        </Button>

        {pages.map((number) => (
          <PageButton
            key={number}
            active={number === page}
            onClick={() => onPageChange(number)}
          >
            {number}
          </PageButton>
        ))}

        <Button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          <ChevronRight size={18} />
        </Button>
      </Pages>
    </Container>
  );
};

export default Pagination;



export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;

  flex-wrap: wrap;

  gap: 16px;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageButton = styled.button<{ active: boolean }>`
  width: 38px;
  height: 38px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  cursor: pointer;

  ${({ active, theme }) =>
    active
      ? css`
          background: ${theme.colors.primary};
          color: white;
        `
      : css`
          background: ${theme.colors.surface};
          color: ${theme.colors.text};
        `}
`;

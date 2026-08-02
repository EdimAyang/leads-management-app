import { Filter, RotateCcw, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import FilterPopover from "./FilterPopover";
import { useSearchParams } from "react-router-dom";

export default function Toolbar() {
  const [open, setOpen] = useState(false);

  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;

  const q = params.get("q") ?? "";

  const status = params.get("status") ?? undefined;
  const navigate = useNavigate();

  return (
    <Container>
      <SearchBox>
        <Search size={18} />

        <Input placeholder="Search business..." />
      </SearchBox>

      <FilterWrapper>
        <FilterButton onClick={() => setOpen((prev) => !prev)}>
          <Filter size={18} />
          Filters
        </FilterButton>

        {open && <FilterPopover onClose={() => setOpen(false)} />}
      </FilterWrapper>

      <ResetButton>
        <RotateCcw size={18} />
        Reset
      </ResetButton>
    </Container>
  );
}

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 44px;

  padding: 0 16px;

  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  svg {
    flex-shrink: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Filters = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  flex: 1;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  min-width: 260px;

  padding: 0 14px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.surface};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 44px;
  border: none;
  outline: none;
  background: transparent;
`;

export const Select = styled.select`
  height: 44px;

  min-width: 150px;

  padding: 0 12px;

  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};
`;

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 44px;

  padding: 0 16px;

  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};

  cursor: pointer;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 44px;

  padding: 0 18px;

  border: none;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

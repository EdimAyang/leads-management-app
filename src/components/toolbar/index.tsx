import { Filter, RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FilterPopover from "./FilterPopover";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";

type FilterValues = {
  category?: string;
  status?: string;
  staffName?: string;
  location?: string;
};

type ToolbarProps = {
  filters: FilterValues;

  onApplyFilters: (filters: FilterValues) => void;

  onResetFilters: () => void;
};

export default function Toolbar({
  filters,
  onApplyFilters,
  onResetFilters,
}: ToolbarProps) {
  const [open, setOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearch.trim()) {
      params.set("q", debouncedSearch);
    } else {
      params.delete("q");
    }

    params.set("page", "1");

    setSearchParams(params);
  }, [debouncedSearch]);

  return (
    <Container>
      <SearchBox>
        <Search size={18} />

        <Input
          value={search}
          placeholder="Search business..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBox>

      <FilterWrapper>
        <FilterButton onClick={() => setOpen((prev) => !prev)}>
          <Filter size={18} />
          Filters
        </FilterButton>

        {open && (
          <FilterPopover
            initialValues={filters}
            onApply={onApplyFilters}
            onReset={onResetFilters}
            onClose={() => setOpen(false)}
          />
        )}
      </FilterWrapper>

      <ResetButton
        onClick={() => {
          onResetFilters();
        }}
      >
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

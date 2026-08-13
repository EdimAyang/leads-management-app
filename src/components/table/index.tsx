import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styled from "styled-components";
import { DataTableProps } from "@/types/table.types";
import { FileSearch } from "lucide-react";
import { Container } from "../empty";

export function DataTable<T>({
  data,
  columns,
  loading,
  emptyMessage = "No records found",
  onRowClick,
}: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return <TableSkeleton />;
  }

  if (!data.length) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              clickable={!!onRowClick}
              onClick={() => onRowClick?.(row.original)}
            >
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

const TableSkeleton = () => {
  return <div>Loading...</div>;
};

type Props = {
  message: string;
};

const EmptyState = ({ message }: Props) => {
  return (
    <Container>
      <FileSearch size={48} />
      <h3>{message}</h3>
    </Container>
  );
};

export default EmptyState;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

export const StyledTable = styled.table`
  min-width: 900px;
  width: 100%;

  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 18px;

  text-align: left;

  font-size: 14px;

  font-weight: 600;

  background: ${({ theme }) => theme.colors.background};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  white-space: nowrap;
`;

export const Td = styled.td`
  padding: 18px;
  white-space: nowrap;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Tr = styled.tr<{ clickable?: boolean }>`
  transition: background 0.2s;

  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

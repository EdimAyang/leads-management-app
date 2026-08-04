import { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: any) => void;
}

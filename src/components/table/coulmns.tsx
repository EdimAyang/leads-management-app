import { ColumnDef } from "@tanstack/react-table";
import { Lead } from "@/types/leads.types";
import LeadActionsMenu from "../table/leadActionsMenu";
import StatusBadge, { CategoryBadge, PriorityBadge } from "../statusBadge";
import { TableCellText } from "./tableCell";

type LeadColumnsProps = {
  onView: (lead: Lead) => void;
  onEdit: (lead: Lead) => void;
  onDelete?: (lead: Lead) => void;
  onUpdateStatus?: (lead: Lead) => void;
  onUpdatePriority?: (lead: Lead) => void;
};

export const getLeadColumns = ({
  onView,
  onEdit,
  onDelete,
  onUpdateStatus,
  onUpdatePriority,
}: LeadColumnsProps): ColumnDef<Lead>[] => [
  {
    accessorKey: "businessName",
    header: "Business",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <CategoryBadge category={row.original.category} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => <PriorityBadge priority={row.original.priority} />,
  },
  {
    accessorKey: "staffName",
    header: "Staff",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "Actions",
    enableSorting: false,
    size: 70,
    minSize: 70,
    maxSize: 70,
    cell: ({ row }) => (
      <LeadActionsMenu
        lead={row.original}
        onView={() => onView(row.original)}
        onEdit={() => onEdit(row.original)}
        onDelete={onDelete ? () => onDelete(row.original) : undefined}
        onUpdateStatus={
          onUpdateStatus ? () => onUpdateStatus(row.original) : undefined
        }
        onUpdatePriority={
          onUpdatePriority ? () => onUpdatePriority(row.original) : undefined
        }
      />
    ),
  },
];

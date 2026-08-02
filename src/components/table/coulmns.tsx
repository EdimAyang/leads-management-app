import { ColumnDef } from "@tanstack/react-table";
import { Lead } from "@/types/leads.types";

// import StatusBadge from "@/components/statusBadge";
// import CategoryBadge from "@/components/statusBadge";
import LeadActionsMenu from "../table/leadActionsMenu";
import StatusBadge, { CategoryBadge } from "../statusBadge";

type LeadColumnsProps = {
  onView: (lead: Lead) => void;
  onEdit: (lead: Lead) => void;
  onDelete?: (lead: Lead) => void;
  onUpdateStatus?: (lead: Lead) => void;
};

export const getLeadColumns = ({
  onView,
  onEdit,
  onDelete,
  onUpdateStatus,
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
    cell: ({ row }) => (
      <LeadActionsMenu
        lead={row.original}
        onView={() => onView(row.original)}
        onEdit={() => onEdit(row.original)}
        onDelete={onDelete ? () => onDelete(row.original) : undefined}
        onUpdateStatus={
          onUpdateStatus ? () => onUpdateStatus(row.original) : undefined
        }
      />
    ),
  },
];

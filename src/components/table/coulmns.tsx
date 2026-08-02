import { ColumnDef } from "@tanstack/react-table";
import { Lead } from "@/types/leads.types";

// import StatusBadge from "@/components/statusBadge";
// import CategoryBadge from "@/components/statusBadge";
import LeadActionsMenu from "../table/leadActionsMenu";

export const columns: ColumnDef<Lead>[] = [
  {
    id: "actions",

    header: "",

    enableSorting: false,

    cell: ({ row }) => <LeadActionsMenu lead={row.original} />,
  },
];

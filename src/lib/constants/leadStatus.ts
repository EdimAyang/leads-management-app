
import { LeadStatus } from "@/types/leads.types";

export const STATUS_META: Record<
  LeadStatus,
  {
    label: string;
    color: string;
    background: string;
  }
> = {
  NEW: {
    label: "New",
    color: "#6B7280",
    background: "#F3F4F6",
  },

  VERIFIED: {
    label: "Verified",
    color: "#16A34A",
    background: "#DCFCE7",
  },

  UNVERIFIED: {
    label: "Unverified",
    color: "#DC2626",
    background: "#FEE2E2",
  },

  IN_TALKS: {
    label: "In Talks",
    color: "#CA8A04",
    background: "#FEF3C7",
  },

  FOLLOW_UP: {
    label: "Follow Up",
    color: "#2563EB",
    background: "#DBEAFE",
  },

  CLOSED_DEAL: {
    label: "Closed Deal",
    color: "#9333EA",
    background: "#F3E8FF",
  },

  NOT_INTERESTED: {
    label: "Not Interested",
    color: "#DC2626",
    background: "#FEE2E2",
  },

  INACTIVE: {
    label: "Inactive",
    color: "#475569",
    background: "#E2E8F0",
  },
};

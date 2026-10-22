import { Priority } from "@/types/leads.types";

export const PRIORITY_META: Record<
  Priority,
  {
    label: string;
    color: string;
    background: string;
    description: string;
  }
> = {
  HIGH: {
    label: "High",
    color: "#DC2626",
    background: "#FEE2E2",
    description: "Requires immediate attention",
  },

  MEDIUM: {
    label: "Medium",
    color: "#CA8A04",
    background: "#FEF3C7",
    description: "Should be followed up soon",
  },

  LOW: {
    label: "Low",
    color: "#16A34A",
    background: "#DCFCE7",
    description: "No immediate action required",
  },
};

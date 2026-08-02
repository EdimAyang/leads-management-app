import { api } from "@/api/axios";
import { DashboardStats } from "@/types/dashboard.types";

export const getDashboardStats = async () => {
  const { data } = await api.get<DashboardStats>("/dashboard/stats");

  return data;
};

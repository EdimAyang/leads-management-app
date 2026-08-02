import { api } from "@/api/axios";
import { DashboardStats } from "@/types/dashboard.types";
import { endpoints } from "../endpoints/leads";

export const getDashboardStats = async () => {
  const { data } = await api.get<DashboardStats>(endpoints.dashboard);

  return data.data;
};

import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "@/api/services/dashboard.service";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });
};
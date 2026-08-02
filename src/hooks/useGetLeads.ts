import { useQuery } from "@tanstack/react-query";

import { getLeads } from "@/api/services/getLeads";

import { LeadQuery } from "@/types/leads.types";

export const useLeads = (query: LeadQuery) => {
  return useQuery({
    queryKey: ["leads", query],
    queryFn: () => getLeads(query),
  });
};

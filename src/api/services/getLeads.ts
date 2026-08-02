import { api } from "@/api/axios";

import { LeadListResponse, LeadQuery } from "@/types/leads.types";

export const getLeads = async (query: LeadQuery): Promise<LeadListResponse> => {
  const { data } = await api.get("/leads", {
    params: query,
  });

  return data;
};

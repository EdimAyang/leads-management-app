import { useQuery } from "@tanstack/react-query";
import { getLeads } from "@/api/services/leads.services";
import { LeadQuery } from "@/types/leads.types";
import { getLeadsById } from "@/api/services/leads.services";

export const useGetLeads = (query: LeadQuery) => {
  return useQuery({
    queryKey: ["leads", query],
    queryFn: () => getLeads(query),
  });
};


export const useGetLeadById = (id?: string) =>
  useQuery({
    queryKey: ["lead", id],
    queryFn: () => getLeadsById(id!),
    enabled: !!id,
  });

//   export const useEditLead = (id?: string, payload?: any) =>
//   useQuery({
//     queryKey: ["lead", id],
//     queryFn: () => editLead(id!, payload),
//     enabled: !!id,
//   });


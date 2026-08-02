import { api } from "@/api/axios";
import { LeadListResponse, LeadQuery , LeadDetailsResponse} from "@/types/leads.types";
import { endpoints } from "../endpoints/leads";
import { CreateLeadInput } from "@/zodSchemas/leads.schema";


export const getLeads = async (query: LeadQuery): Promise<LeadListResponse> => {
  const { data } = await api.get(endpoints.leads, {
    params: query,
  });

  return data;
};

export const createLead = async (payload: CreateLeadInput) => {
  const { data } = await api.post(endpoints.createLeads, payload);

  return data;
};

export const getLeadsById = async (id: string): Promise<LeadDetailsResponse> => {
  const { data } = await api.get(endpoints.getLeadsDetails(id));

  return data;
};

export const editLead = async (id: string, payload: CreateLeadInput) => {
  const { data } = await api.patch(endpoints.editLeads(id), payload);

  return data;
};

export const BASE_URL = `${import.meta.env.VITE_BASE_URL}api/v1`


export const endpoints = {
  leads: "/leads",
  createLeads: "/leads/create",
  getLeadsDetails:(id:string)=>`leads/${id}`,
  editLeads:(id:string)=>`leads/${id}`,

  dashboard: "/leads/dashboard/stats",
};
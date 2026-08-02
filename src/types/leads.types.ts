export type Status =
  | "NEW"
  | "VERIFIED"
  | "UNVERIFIED"
  | "IN_TALKS"
  | "FOLLOW_UP"
  | "CLOSED_DEAL"
  | "NOT_INTERESTED"
  | "INACTIVE";


 export type LeadCategory =
  | "HOTEL"
  | "RESTAURANT"
  | "BAKERY";

export type LeadStatus =
  | "NEW"
  | "VERIFIED"
  | "UNVERIFIED"
  | "IN_TALKS"
  | "FOLLOW_UP"
  | "CLOSED_DEAL"
  | "NOT_INTERESTED"
  | "INACTIVE";

export interface Lead {
  id: string;

  businessName: string;

  phoneNumber: string;

  address: string;

  category: LeadCategory;

  status: LeadStatus;

  staffName: string;

  location: string;

  createdAt: string;

  updatedAt: string;
}

export interface LeadPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface LeadListResponse {
  success: boolean;

  data: Lead[];

  pagination: LeadPagination;
}

export interface LeadQuery {
  page: number;

  limit: number;

  q?: string;

  category?: LeadCategory;

  status?: LeadStatus;

  staffName?: string;

  location?: string;

  sortBy?: keyof Lead;

  sort?: "asc" | "desc";
}
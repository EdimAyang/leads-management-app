export interface DashboardStats {
  success: boolean;
  message: string;
  data: {
    summary: {
      totalLeads: number;
      NEW: number;
      VERIFIED: number;
      UNVERIFIED: number;
      IN_TALKS: number;
      FOLLOW_UP: number;
      CLOSED_DEAL: number;
      NOT_INTERESTED: number;
      INACTIVE: number;
    };
    conversionRate: number;
    activeLeads: number;
    categories: {
      HOTEL: number;
      RESTAURANT: number;
      BAKERY: number;
    };
    staffPerformance: {
      staffName: string;
      totalLeads: number;
    }[];

    recentLeads: {
      id: string;
      businessName: string;
      phoneNumber: string;
      address: string;
      category: string;
      status: string;
      staffName: string;
      notes: string | null;
      location: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}

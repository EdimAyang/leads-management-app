import { z } from "zod";


export const leadQuerySchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),

  q: z.string().optional(),

  category: z.enum(["HOTEL", "RESTAURANT", "BAKERY", "VENDOR"]).optional(),

  status: z
    .enum([
      "NEW",
      "VERIFIED",
      "UNVERIFIED",
      "IN_TALKS",
      "FOLLOW_UP",
      "CLOSED_DEAL",
      "NOT_INTERESTED",
      "INACTIVE",
    ])
    .optional(),

  staffName: z.string().optional(),

  location: z.string().optional(),
});

export type LeadQuery = z.infer<typeof leadQuerySchema>;

export const createLeadSchema = z.object({
  businessName: z.string().min(2, 'Business name is required'),

  phoneNumber: z.string().min(11, 'Phone number must be at least 11 characters long').optional(),

  address: z.string().min(5, 'Address is required'),

  location: z.string().min(2, 'Location is required'),

  category: z.enum(["HOTEL", "RESTAURANT", "BAKERY", "VENDOR"]),

  status: z.enum([
    "NEW",
    "VERIFIED",
    "UNVERIFIED",
    "IN_TALKS",
    "FOLLOW_UP",
    "CLOSED_DEAL",
    "NOT_INTERESTED",
    "INACTIVE",
  ]),
  staffName: z.string().min(1, 'Staff name is required'),

  notes: z.string().optional(),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;

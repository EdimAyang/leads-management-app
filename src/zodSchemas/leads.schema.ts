import { z } from "zod";


export const leadQuerySchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),

  q: z.string().optional(),

  category: z.enum(["HOTEL", "RESTAURANT", "BAKERY"]).optional(),

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
  businessName: z.string().min(2),

  phoneNumber: z.string().min(11).optional(),

  address: z.string().min(5),

  location: z.string().min(2),

  category: z.enum(["HOTEL", "RESTAURANT", "BAKERY"]),

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
  staffName: z.string().min(1),

  notes: z.string().optional(),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;

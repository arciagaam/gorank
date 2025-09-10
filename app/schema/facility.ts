import { z } from 'zod';

export const FacilitySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  sportTypes: z.array(z.string()),
  amenities: z.array(z.object({
    name: z.string(),
    icon: z.string()
  })),
  pictures: z.array(z.string()),
  location: z.string(),
  description: z.string(),
  openingTime: z.string(), // Format: "HH:MM" (24-hour)
  closingTime: z.string(), // Format: "HH:MM" (24-hour)
  status: z.enum(['popular', 'top', 'near']).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const CreateFacilitySchema = z.object({
  name: z.string(),
  sportTypes: z.array(z.string()),
  amenities: z.array(z.object({
    name: z.string(),
    icon: z.string()
  })),
  pictures: z.array(z.instanceof(File)),
  location: z.string(),
  description: z.string(),
  openingTime: z.string(),
  closingTime: z.string(),
  status: z.enum(['popular', 'top', 'near']).optional(),
});

export const UpdateFacilitySchema = CreateFacilitySchema.partial().extend({
  id: z.string(),
});

export const FacilityFiltersSchema = z.object({
  sportTypes: z.array(z.string()).optional(),
  amenities: z.array(z.string()).optional(),
  maxPrice: z.number().optional(),
  location: z.string().optional(),
  isOpen: z.boolean().optional(), // Based on current time vs opening/closing times
});

export const FacilitySearchParamsSchema = z.object({
  query: z.string().optional(),
  filters: FacilityFiltersSchema.optional(),
  page: z.number().optional(),
  limit: z.number().optional(),
});

export type Facility = z.infer<typeof FacilitySchema>;
export type CreateFacility = z.infer<typeof CreateFacilitySchema>;
export type UpdateFacility = z.infer<typeof UpdateFacilitySchema>;
export type FacilityFilters = z.infer<typeof FacilityFiltersSchema>;
export type FacilitySearchParams = z.infer<typeof FacilitySearchParamsSchema>;
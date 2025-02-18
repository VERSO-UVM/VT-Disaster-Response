import { z } from "zod";

export const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    street1: z.string(),
    street2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip: z.string()
})
.partial()
.refine(
  data => data.email || data.phone,
  'Either email or phone must be provided.',
);

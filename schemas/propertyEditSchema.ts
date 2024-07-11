import * as z from "zod";

export const formSchema = z.object({
  name: z.string(),
  category: z.string(),
  city: z.string(),
  state: z.string(),
  image: z.any(),
  video: z.any().optional(),
  area: z.string(),
  rooms: z.string(),
  bathrooms: z.string(),
  garage: z.string(),

  allotment: z.string(),
  description: z
    .string()
    .max(200, { message: "O texto não pode ter mais de 200 caracteres" }),
  price: z.string(),
  rent: z.string(),
  taxe: z.string(),
  title: z.string(),
});

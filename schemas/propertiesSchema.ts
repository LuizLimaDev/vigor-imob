import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve conter no mínimo 3 caracteres.",
  }),
  category: z.string().min(3, {
    message: "A categoria deve conter no mínimo 3 caracteres.",
  }),
  city: z.string().min(3, {
    message: "A cidade deve conter no mínimo 3 caracteres.",
  }),
  state: z.string().min(3, {
    message: "O estado deve conter no mínimo 3 caracteres.",
  }),
  title: z.string().min(3, {
    message: "O título deve conter no mínimo 3 caracteres.",
  }),

  image: z.any(),
  video: z.string(),
  area: z
    .string({
      required_error: "Digite ao menos um número para a área.",
    })
    .min(1, {
      message: "A área deve conter no mínimo 1 número.",
    }),
  rooms: z
    .string({
      required_error: "Digite ao menos um número para a quarto.",
    })
    .min(1, {
      message: "O quarto deve conter no mínimo 1 número.",
    }),
  bathrooms: z
    .string({
      required_error: "Digite ao menos um número para a banheiro.",
    })
    .min(1, {
      message: "O banheiro deve conter no mínimo 1 número.",
    }),
  garage: z
    .string({
      required_error: "Digite ao menos um número para a garagem.",
    })
    .min(1, {
      message: "A garagem deve conter no mínimo 1 número.",
    }),

  description: z
    .string()
    .min(10, { message: "Escreva pelo menos 10 caracteres." })
    .max(200, { message: "O texto não pode ter mais de 200 caracteres" }),
  price: z
    .string({
      required_error: "Digite ao menos um número para o valor.",
    })
    .min(1, {
      message: "O valor deve conter no mínimo 1 número.",
    }),
  rent: z
    .string({
      required_error: "Digite ao menos um número para o valor.",
    })
    .min(1, {
      message: "O valor deve conter no mínimo 1 número.",
    }),
  taxe: z
    .string({
      required_error: "Digite ao menos um número para o valor.",
    })
    .min(1, {
      message: "O valor deve conter no mínimo 1 número.",
    }),
});

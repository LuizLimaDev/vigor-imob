import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "O nome deve conter no mínimo 3 caracteres.",
    })
    .max(15, { message: "O nome deve ter no máximo 15 caracteres" }),
  profileImage: z.any(),
  creci: z.string().min(3, {
    message: "O CRECI deve conter no mínimo 3 caracteres.",
  }),
  text: z
    .string()
    .min(10, { message: "Escreva pelo menos 10 caracteres." })
    .max(200, { message: "O texto não pode ter mais de 200 caracteres" }),
});

export const editFormSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve conter no mínimo 3 caracteres.",
  }),
  profileImage: z.any(),
  creci: z.string().min(3, {
    message: "O CRECI deve conter no mínimo 3 caracteres.",
  }),
  description: z
    .string()
    .min(10, { message: "Escreva pelo menos 10 caracteres." })
    .max(200, { message: "O texto não pode ter mais de 200 caracteres" }),
});

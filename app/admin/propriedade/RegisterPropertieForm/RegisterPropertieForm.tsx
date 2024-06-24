"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Textarea } from "@/app/_components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";

const propertiesType = ["Casa", "Apartamento", "Comercial", "Rural", "Praia"];

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve conter no mínimo 3 caracteres.",
  }),
  type: z.string(),
  city: z.string().min(3, {
    message: "A cidade deve conter no mínimo 3 caracteres.",
  }),
  state: z.string().min(3, {
    message: "O estado deve conter no mínimo 3 caracteres.",
  }),

  photos: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, "Insira ao menos uma foto."),
  video: z.instanceof(FileList).optional(),
  area: z
    .string({
      required_error: "Digite ao menos um número para a área.",
    })
    .min(1, {
      message: "A área deve conter no mínimo 1 número.",
    }),
  bedroom: z
    .string({
      required_error: "Digite ao menos um número para a quarto.",
    })
    .min(1, {
      message: "O quarto deve conter no mínimo 1 número.",
    }),
  bathroom: z
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

  text: z
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
  tax: z
    .string({
      required_error: "Digite ao menos um número para o valor.",
    })
    .min(1, {
      message: "O valor deve conter no mínimo 1 número.",
    }),
});

const RegisterPropertieForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      city: "",
      state: "",
      area: "",
      bedroom: "",
      bathroom: "",
      garage: "",
      type: "",
      text: "",
      price: "",
      rent: "",
      tax: "",
    },
  });
  const photosRef = form.register("photos");
  const videoRef = form.register("video");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.type === "") {
      setSelectedOption("Escolha uma opção.");
      return;
    }
    console.log(values);

    router.push("/admin");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex w-full flex-col justify-start gap-2 px-6 desktop:w-full desktop:items-center"
      >
        <div className="z-50 desktop:flex desktop:flex-row desktop:gap-10">
          <div className="desktop:flex desktop:w-[21.375rem] desktop:flex-col desktop:gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-archivo text-sm text-VIprimary-color">
                    Nome
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nome e Sobrenome" {...field} />
                  </FormControl>
                  <FormMessage className="mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />

            <div className="mt-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Selecione um tipo:</SelectLabel>
                          {propertiesType.map((type, index) => (
                            <SelectItem key={index} value={type!}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {selectedOption && (
                      <p className="pt-1 text-red-600">{selectedOption}</p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-8 flex w-[21.375rem] flex-col gap-1 desktop:mt-2 ">
              <FormLabel className="font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Localização
              </FormLabel>

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Cidade" {...field} />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Estado" {...field} />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="h-auto">
            {/* TODO - como controlar estes input files */}
            <FormLabel className="font-archivo text-sm text-VIprimary-color">
              Mídia
            </FormLabel>
            <FormField
              control={form.control}
              name="photos"
              render={() => (
                <FormItem className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-VIprimary-color">
                      Fotos
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="Fotos"
                        accept="image/*"
                        multiple
                        {...photosRef}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="video"
              render={() => (
                <FormItem className="mt-10 flex flex-col">
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-VIprimary-color">
                      Vídeo
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="Fotos"
                        accept="video/*"
                        {...videoRef}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />

            <div className=" flex w-[21.375rem] flex-col gap-1 desktop:mt-2 ">
              <FormLabel className="mt-[1.2rem] font-archivo text-sm text-VIprimary-color">
                Características
              </FormLabel>

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Metragem" type="number" {...field} />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bedroom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Quartos" type="number" {...field} />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bathroom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Banheiros" type="number" {...field} />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="garage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Garagem" type="number" {...field} />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex h-auto w-[21.375rem] flex-col gap-4">
            <div>
              <FormLabel className="mb-1 font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Mensagem
              </FormLabel>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Deixe sua mensagem aqui."
                        {...field}
                        className="h-[7.625rem]"
                      />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />

              {/* TODO - controlar e colocar as restricoes */}
              <div className="flex flex-col gap-1">
                <FormLabel className="mb-1 mt-[1.75rem] font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Compra
                </FormLabel>
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Compra" type="number" {...field} />
                      </FormControl>
                      <FormMessage className="mt-1 desktop:ml-[3px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rent"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Aluguel" type="number" {...field} />
                      </FormControl>
                      <FormMessage className="mt-1 desktop:ml-[3px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tax"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Condomínio"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 desktop:ml-[3px]" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" className="mt-6 max-w-[6.187rem] self-center">
          Cadastrar
        </Button>
      </form>
    </Form>
  );
};

export default RegisterPropertieForm;

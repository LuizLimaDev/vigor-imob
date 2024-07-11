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

import { Textarea } from "@/app/_components/ui/textarea";
import { formSchema } from "@/schemas/propertiesSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";

type ValuesType = {
  name: string;
  category: string;
  city: string;
  state: string;
  title: string;
  video: string;
  area: string;
  rooms: string;
  bathrooms: string;
  garage: string;
  description: string;
  price: string;
  rent: string;
  taxe: string;
  image?: any;
  allotment?: any;
};

const RegisterPropertieForm = () => {
  const [files, setFiles] = useState<FileList | null>();
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      city: "",
      state: "",
      title: "",
      video: "",
      area: "",
      rooms: "",
      bathrooms: "",
      garage: "",
      category: "",
      description: "",
      price: "",
      rent: "",
      taxe: "",
      allotment: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();
    const values: ValuesType = data;

    for (let key in values) {
      formData.append(key, values[key as keyof ValuesType] as string | Blob);
    }

    if (files) {
      for (let i = 0; i < files?.length!; i++) {
        formData.append("image", files![i]);
      }
    } else {
      setError("Insira ao menos uma foto.");
      return;
    }

    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/property/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      console.log(res);
      throw new Error("Falha ao cadastrar na API");
    }

    router.push("/admin/imoveis");
    router.refresh();
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
                    <Input placeholder="Nome do imóvel" {...field} />
                  </FormControl>
                  <FormMessage className="mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-archivo text-sm text-VIprimary-color">
                    Categoria
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Comercial, casa, alugel" {...field} />
                  </FormControl>
                  <FormMessage className="mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />

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

              <FormLabel className="mt-5 font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Título de apresentação
              </FormLabel>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Título" {...field} />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="h-auto">
            <FormLabel className="font-archivo text-sm text-VIprimary-color">
              Mídia
            </FormLabel>
            <FormField
              control={form.control}
              name="image"
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
                        onChange={(e) => {
                          setFiles(e.target.files);
                        }}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="mt-1 desktop:ml-[3px]" />
                  {error && (
                    <FormMessage className="mt-1 desktop:ml-[3px]">
                      {error}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="video"
              render={({ field }) => (
                <FormItem className="mt-10 flex flex-col">
                  <div className="flex items-center gap-2">
                    <FormLabel className="text-VIprimary-color">
                      Vídeo
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Link youtube embed" {...field} />
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
                name="rooms"
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
                name="bathrooms"
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
                Loteamento
              </FormLabel>
              <FormField
                control={form.control}
                name="allotment"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Loteamento"
                        type="text"
                        {...field}
                        className="mb-4"
                      />
                    </FormControl>
                    <FormMessage className=" mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />

              <FormLabel className="mb-1 font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Descrição
              </FormLabel>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Deixe sua mensagem aqui."
                        {...field}
                        className="h-[5.3rem]"
                      />
                    </FormControl>
                    <FormMessage className="mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />

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
                  name="taxe"
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

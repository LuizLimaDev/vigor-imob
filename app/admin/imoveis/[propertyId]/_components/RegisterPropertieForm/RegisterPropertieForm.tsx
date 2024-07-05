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
import { formSchema } from "@/schemas/propertyEditSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";

// eslint-disable-next-line no-unused-vars
function Values({ values }: any) {
  useForm({ values });
}

const RegisterPropertieForm = ({ property }: any) => {
  const [files, setFiles] = useState<FileList | null>([]);
  const router = useRouter();
  const values = property;
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      category: "",
      city: "",
      state: "",
      area: "",
      rooms: "",
      bathrooms: "",
      garage: "",
      description: "",
      price: "",
      rent: "",
      taxe: "",
      title: "",
    },
    values,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    for (let key in values) {
      formData.append(key, values[key]);
    }

    for (let i = 0; i < files?.length!; i++) {
      formData.append("image", files![i]);
    }

    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property/${property._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (!res.ok) {
      console.log(res.text);
      throw new Error("Falha da API");
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
                    <Input placeholder="Nome e Sobrenome" {...field} />
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
                    <Input placeholder="Nome e Sobrenome" {...field} />
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
                Título
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
                        <Input placeholder="Compra" type="text" {...field} />
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
                        <Input placeholder="Aluguel" type="text" {...field} />
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
                          type="text"
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
          Atualizar
        </Button>
      </form>
    </Form>
  );
};

export default RegisterPropertieForm;

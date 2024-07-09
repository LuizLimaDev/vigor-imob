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
import { editFormSchema } from "@/schemas/brokerSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";

type ValuesType = {
  name: string;
  description: string;
  creci: string;
};

const RegisterBrokerForm = ({ broker }: any) => {
  const [files, setFiles] = useState<FileList | null>();
  const router = useRouter();
  const values = broker;
  const form = useForm<z.infer<typeof editFormSchema>>({
    defaultValues: {
      name: "",
      creci: "",
      description: "",
    },
    values,
  });

  async function onSubmit(data: z.infer<typeof editFormSchema>) {
    const formData = new FormData();
    const values: ValuesType = {
      name: data.name,
      creci: data.creci,
      description: data.description,
    };

    for (let key in values) {
      formData.append(key, values[key as keyof ValuesType] as string | Blob);
    }
    if (files) {
      formData.append("profileImage", files![0]);
    }

    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/employ/${broker._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (!res.ok) {
      console.log(res);
      throw new Error("Falha ao cadastrar na API");
    }

    router.push("/admin/corretores");
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
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage className="absolute mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profileImage"
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
              name="creci"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-archivo text-sm uppercase text-VIprimary-color">
                    creci
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage className="absolute mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />

            <div className="flex h-auto w-[21.375rem] flex-col gap-4">
              <div>
                <FormLabel className="mb-1 font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Texto
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
                          className="h-[10rem]"
                        />
                      </FormControl>
                      <FormMessage className="absolute mt-1 desktop:ml-[3px]" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="z-50 mt-6 max-w-[6.187rem] self-center"
            >
              Atualizar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default RegisterBrokerForm;

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "O título deve conter no mínimo 3 caracteres.",
  }),
  video: z
    .any()
    .refine((files) => files?.length == 1, "Insira ao menos um vídeo."),

  text: z
    .string()
    .min(10, { message: "Escreva pelo menos 10 caracteres." })
    .max(200, { message: "O texto não pode ter mais de 200 caracteres" }),
});

const RegisterFeedForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });
  const videoRef = form.register("video");

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-archivo text-sm text-VIprimary-color">
                    Título
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Título" {...field} />
                  </FormControl>
                  <FormMessage className="absolute mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="video"
              render={() => (
                <FormItem className="relative mt-10 flex flex-col">
                  <FormLabel className="mb-1 text-VIprimary-color">
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
                  <FormMessage className="absolute -bottom-5 mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />
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
                        className="h-[10rem]"
                      />
                    </FormControl>
                    <FormMessage className="absolute mt-1 desktop:ml-[3px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="z-50 mt-6 max-w-[6.187rem] self-center"
        >
          Cadastrar
        </Button>
      </form>
    </Form>
  );
};

export default RegisterFeedForm;

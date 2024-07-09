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
  highlights: z.string().min(3, {
    message: "O empreendimento deve conter no mínimo 3 caracteres.",
  }),
  story: z.string().min(10, { message: "Insira ao menos um link." }),
});

const UpdateHomeForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      highlights: "",
      story: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/home/66297d837dd0a66843b1091b",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!res.ok) {
      console.log(res.text);
      throw new Error("Falha na comunicação com a API");
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
          <div className="desktop:flex desktop:w-[21.375rem] desktop:flex-col desktop:gap-14">
            <FormField
              control={form.control}
              name="highlights"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-archivo text-sm text-VIprimary-color">
                    Empreendimentos
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="comercial, verão, outono, inverno, primavera"
                      {...field}
                    />
                  </FormControl>
                  <p className="mt-1 text-xs font-bold text-red-500">
                    Limitado a 10 nomes.
                  </p>
                  <FormMessage className="absolute mt-1 desktop:ml-[3px]" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex h-auto w-[21.375rem] flex-col gap-4">
            <div>
              <FormLabel className="mb-1 font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Stories
              </FormLabel>
              <FormField
                control={form.control}
                name="story"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="link01, link02, link03..."
                        {...field}
                        className="h-[10rem]"
                      />
                    </FormControl>
                    <p className="mt-1 text-xs font-bold text-red-500">
                      Limitado a 7 links.
                    </p>
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
          Atualizar
        </Button>
      </form>
    </Form>
  );
};

export default UpdateHomeForm;

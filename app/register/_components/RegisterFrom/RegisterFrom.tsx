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

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve conter no mínimo 3 caracteres.",
  }),
  phone: z.number().min(11, {
    message: "O telefone deve conter DDD e número.",
  }),
  email: z.string().email().min(11, {
    message: "O telefone deve conter DDD e número.",
  }),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col justify-start gap-2 px-6"
      >
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
              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-archivo text-sm text-VIprimary-color">
                Telefone
              </FormLabel>
              <FormControl>
                <Input placeholder="(xx) xxxxx - xxxx" {...field} />
              </FormControl>
              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-archivo text-sm text-VIprimary-color">
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="xxxx@xxx.xxx" {...field} />
              </FormControl>
              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

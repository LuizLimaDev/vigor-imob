"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";
import Title from "../_components/Title/Title";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Este campo precisa ser preenchido.",
  }),
  password: z.string().min(6, {
    message: "A senha precisa conter no mínimo 6 digitos.",
  }),
});

const Admin = () => {
  const [signInErrors, setSignInErrors] = useState<string | null>("");
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });

    if (result?.ok === false) {
      setSignInErrors(result.error);
      return;
    }

    router.replace("admin/imoveis");
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Title>Entrar como administrator</Title>
      <p className="mt-4">Entre com o email e senha nos campos abaixo</p>

      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-12 flex w-[20.3125rem] flex-col items-center justify-center gap-2"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="username"
                      placeholder="administrador"
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      className="w-[20.3125rem]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="password"
                      placeholder="senha"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      className="w-[20.3125rem]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1" />
                </FormItem>
              )}
            />
            {signInErrors && <FormMessage>{signInErrors}</FormMessage>}

            <Button className="mt-6">Entrar</Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default Admin;

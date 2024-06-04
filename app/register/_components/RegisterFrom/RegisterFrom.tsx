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
import { Textarea } from "@/app/_components/ui/textarea";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import whatsMsg from "@/services/whatsMsg";
import { useRouter } from "next/navigation";

const propertiesType = ["Casa", "Apartamento", "Comercial", "Rural", "Praia"];

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve conter no mínimo 3 caracteres.",
  }),
  phone: z.string().min(11, {
    message: "O telefone deve conter DDD e número.",
  }),
  email: z.string().email({ message: "Email inválido" }).min(11, {
    message: "O telefone deve conter DDD e número.",
  }),
  street: z.string().min(3, {
    message: "A rua deve conter no mínimo 3 caracteres.",
  }),
  neighborhood: z.string().min(3, {
    message: "O bairro deve conter no mínimo 3 caracteres.",
  }),
  cep: z.string().min(3, {
    message: "O CEP deve conter no mínimo 3 caracteres.",
  }),
  city: z.string().min(3, {
    message: "A cidade deve conter no mínimo 3 caracteres.",
  }),
  type: z.string(),
  text: z
    .string()
    .min(10, { message: "Escreva pelo menos 10 caracteres." })
    .max(200, { message: "O texto não pode ter mais de 200 caracteres" }),
});

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      street: "",
      neighborhood: "",
      cep: "",
      city: "",
      type: "",
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const name = values.name;
    const phone = values.phone;
    const email = values.email;
    const street = values.street;
    const neighborhood = values.neighborhood;
    const cep = values.cep;
    const city = values.city;
    const type = values.type;
    const text = values.text;

    const msg = await whatsMsg(
      name,
      phone,
      email,
      street,
      neighborhood,
      cep,
      city,
      type,
      text
    );

    console.log(msg);
    router.push(msg);
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

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tipo de imóvel" />
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
            </FormItem>
          )}
        ></FormField>

        <div className="mt-8 flex flex-col gap-1">
          <p className="font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Localização
          </p>
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Rua" {...field} />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="neighborhood"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Bairro" {...field} />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="CEP" {...field} />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Cidade" {...field} />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
        </div>

        <div className="my-8">
          <p className="mb-1 font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Mensagem
          </p>
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Deixe sua mensagem aqui." {...field} />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Cadastrar</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

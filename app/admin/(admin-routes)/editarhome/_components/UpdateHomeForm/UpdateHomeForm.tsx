"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/_components/ui/form";
import { useForm } from "react-hook-form";

import { Checkbox } from "@/app/_components/ui/checkbox";
import { Input } from "@/app/_components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";

const formSchema = z.object({
  highlights: z.array(z.string()),
  link0: z.string(),
  link1: z.string(),
  link2: z.string(),
  link3: z.string(),
  link4: z.string(),
  link5: z.string(),
  link6: z.string(),
});

const UpdateHomeForm = ({
  allotments,
  homeData,
}: {
  allotments: string[];
  homeData: {
    _id: string;
    heroVideo: string;
    highlights: string[];
    story: string[];
  };
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      highlights: homeData.highlights || ["Em breve..."],
      link0: homeData.story[0] || "",
      link1: homeData.story[1] || "",
      link2: homeData.story[2] || "",
      link3: homeData.story[3] || "",
      link4: homeData.story[4] || "",
      link5: homeData.story[5] || "",
      link6: homeData.story[6] || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    let values = data;

    if (
      values.highlights[0] === "Em breve..." &&
      values.highlights.length > 1
    ) {
      values.highlights.shift();
    }

    const newHomeData = {
      highlights: values.highlights,
      story: [
        values.link0,
        values.link1,
        values.link2,
        values.link3,
        values.link4,
        values.link5,
        values.link6,
      ],
    };

    console.log(newHomeData);

    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/home/66297d837dd0a66843b1091b",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHomeData),
      }
    );

    if (!res.ok) {
      console.log(res.text);
      throw new Error("Falha na comunicação com a API");
    }

    console.log(res);

    router.push("/admin/imoveis");
    router.refresh();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex w-full flex-col items-center justify-start gap-2 px-6"
      >
        <div className="z-50 flex flex-row gap-10">
          <div className="mt-2 flex w-[21.375rem] flex-col gap-1">
            <FormLabel className="font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Loteamentos
            </FormLabel>
            <FormDescription className="mb-2">
              Escolha apenas 10 empreendimento para destacar.
            </FormDescription>
            {allotments.map((item, index) => (
              <FormField
                key={String(index)}
                control={form.control}
                name="highlights"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={String(index)}
                      className="flex flex-row items-end"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item])
                              : field.onChange(
                                  field.value?.filter((value) => value !== item)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="ml-2 mt-1 cursor-pointer font-archivo text-VIprimary-color">
                        {item}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>

          <div className="flex h-auto w-[21.375rem] flex-col gap-4">
            <div>
              <FormLabel className="mb-1 font-archivo text-sm font-medium leading-none text-VIprimary-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Stories
              </FormLabel>
              <FormField
                control={form.control}
                name="link0"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-2 mt-2"
                        placeholder="Link embed do youtube"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-2"
                        placeholder="Link embed do youtube"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-2"
                        placeholder="Link embed do youtube"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link3"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-2"
                        placeholder="Link embed do youtube"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link4"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-2"
                        placeholder="Link embed do youtube"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link5"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-2"
                        placeholder="Link embed do youtube"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link6"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-2"
                        placeholder="Link embed do youtube"
                        {...field}
                      />
                    </FormControl>
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

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function postProperty(values: any) {
  console.log(values);

  await fetch(
    "https://king-prawn-app-vxkkv.ondigitalocean.app/api/property/upload",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  revalidatePath("/admin/imoveis", "page");
  redirect("/admin/imoveis");
}

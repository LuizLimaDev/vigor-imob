"use server";

import { redirect } from "next/navigation";

export const filterProperties = async (data: string) => {
  if (data) {
    const params = new URLSearchParams([["category", data]]);

    redirect(`/properties?${params}`);
  }

  redirect(`/properties}`);
};

export const filterPropertiesCity = async (data: string) => {
  if (data) {
    const params = new URLSearchParams([["city", data]]);

    redirect(`/properties?${params}`);
  }

  redirect(`/properties}`);
};

export const filterPropertiesAllotment = async (data: string) => {
  if (data) {
    const params = new URLSearchParams([["allotment", data]]);

    redirect(`/properties?${params}`);
  }

  redirect(`/properties}`);
};

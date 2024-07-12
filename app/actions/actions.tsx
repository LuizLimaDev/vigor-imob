"use server";

import { redirect } from "next/navigation";

export const filterProperties = async (data: string[]) => {
  const mainRoleFilters = data;

  if (data.length > 0) {
    const params = new URLSearchParams([
      ["category", mainRoleFilters.join(",")],
    ]);

    redirect(`/properties?category=${params}`);
  }

  redirect(`/properties}`);
};

export const filterPropertiesCity = async (data: string) => {
  if (data) {
    const params = new URLSearchParams([["city", data]]);

    redirect(`/properties?city=${params}`);
  }

  redirect(`/properties}`);
};

export const filterPropertiesAllotment = async (data: string) => {
  if (data) {
    const params = new URLSearchParams([["city", data]]);

    redirect(`/properties?city=${params}`);
  }

  redirect(`/properties}`);
};

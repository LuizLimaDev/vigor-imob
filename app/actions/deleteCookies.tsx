"use server";

import { cookies } from "next/headers";

export async function deleteCookies() {
  cookies().delete("_vcn");
  cookies().delete("_vercel_jwt");
  cookies().delete("next-auth.pkce.code_verifier");

  cookies().delete("next-auth.session-token");
  cookies().delete("next-auth.csrf-token");
  cookies().delete("next-auth.callback-url");
}

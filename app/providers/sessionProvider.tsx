"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type NextAuthSessionProviderProps = {
  children: ReactNode;
};

export default function NExtAtuhSessionProvider({
  children,
}: NextAuthSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

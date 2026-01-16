"use client";

import { ReactNode } from "react";
import { MenuProvider } from "./MenuContext";

export default function MenuWrapper({ children }: { children: ReactNode }) {
  return <MenuProvider>{children}</MenuProvider>;
}

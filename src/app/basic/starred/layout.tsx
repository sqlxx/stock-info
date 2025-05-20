"use client"

import { useBreadcrumb } from "@/components/header-content";
import { useEffect } from "react";

export default function SymbolsLayout({children}: Readonly<{children: React.ReactNode}>) {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      {
        label: "关注列表",
      },
    ]);
  }, [setBreadcrumbs]);

  return (
    <>{children}</>
  )
}
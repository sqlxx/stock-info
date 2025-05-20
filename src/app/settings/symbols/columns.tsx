'use client'
import { Stock } from "@/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Stock>[] = [
  {
    header: "代码",
    accessorKey: "symbol",
  },
  {
    header: "名称",
    accessorKey: "name",
  },
  {
    header: "交易所",
    accessorKey: "exchange",
  },
]
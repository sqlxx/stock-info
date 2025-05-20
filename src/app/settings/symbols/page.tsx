import { Stock } from "@/generated/prisma"
import ActionBar from "./action-bar"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import db from "@/lib/db"

export default async function SymbolsPage() {
  const stocks: Stock[] = await db.stock.findMany()

  return (
    <div className="flex flex-col gap-4 px-4">
      <ActionBar />
      <DataTable columns={columns} data={stocks} />

    </div>
  )
}
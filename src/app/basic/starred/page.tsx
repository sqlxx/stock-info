import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Stock } from "@/generated/prisma"
import db from "@/lib/db"
import ActionBar from "./action-bar"

export default async function SymbolsPage() {
  const stocks: Stock[] = await db.stockBasic.findMany()

  return (
    <div className="flex flex-col gap-4">
      <ActionBar/>
      <div className="px-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="align-center">代码</TableHead>
              <TableHead>名称</TableHead>
              <TableHead>交易所</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell>{stock.symbol}</TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell>{stock.exchange}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>

    </div>
  )
}
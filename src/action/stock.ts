'use server'
import { getSymbolList, StockBasicItem } from "@/api/by-api";
import db from "@/lib/db";

export async function refreshStockBasic() {
  const data = await getSymbolList();
  await db.stock.deleteMany();
  console.log("delete done")
  await db.stock.createMany({
    data: data.map((item: StockBasicItem) => ({
      symbol: item.dm.split(".")[0],
      name: item.mc,
      exchange: item.jys
    }))
  })
  console.log("created done")

}
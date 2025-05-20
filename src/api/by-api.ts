const apiKey = process.env.BY_API_KEY;
const apiHost = process.env.BY_API_HOST;

export interface StockBasicItem {
  dm: string; // 代码
  mc: string; // 名称
  jys: string; // 交易所
}

export async function getSymbolList(): Promise<StockBasicItem[]> {
  const url = `${apiHost}/hslt/list/${apiKey}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json() as StockBasicItem[];
}
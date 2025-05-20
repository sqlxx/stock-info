"use client"

import { refreshStockBasic } from "@/action/stock"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function ActionBar() {
  
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const addSymbol = async () => {
    setIsLoading(true)
    try {
      await refreshStockBasic()
      router.refresh(); 
    } catch (error) {
      console.error("Refresh stock data failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-4 gap-4">
      <Button className="cursor-pointer w-24" onClick={addSymbol} disabled={isLoading}>添加
        </Button>
    </div>
  )
}

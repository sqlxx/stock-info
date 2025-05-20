"use client"

import { refreshStockBasic } from "@/action/stock"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function ActionBar() {
  
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleRefresh = async () => {
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
    <div className="gap-4">
      <Button className="cursor-pointer w-24" onClick={handleRefresh} disabled={isLoading}>{isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            刷新
          </>
        ) : (
          "刷新"
        )}</Button>
    </div>
  )
}

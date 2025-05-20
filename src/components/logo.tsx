"use client"

import { BadgeDollarSign } from "lucide-react"
import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"

export function Logo ( ) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="flex items-center gap-3">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <BadgeDollarSign className="size-4" />
          </div>
          <div className="flex flex-col flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Stock Analyze</span>
            <span className="truncate text-xs">The platform for stock analyze</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

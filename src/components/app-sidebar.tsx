"use client"

import {
  Table2,
  SquareTerminal
} from "lucide-react"
import * as React from "react"

import { Logo } from "@/components/logo"
import { NavMain } from "@/components/nav-main"
import { NavSettings } from "@/components/nav-settings"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Qin",
    email: "sqlxx@sina.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "基本信息",
      url: "/basic/starred",
      icon: SquareTerminal,
      isActive: true,
    }
  ],
  settings: [
    {
      name: "Symbols",
      url: "/settings/symbols",
      icon: Table2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSettings settings ={data.settings} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

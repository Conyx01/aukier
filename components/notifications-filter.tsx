"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function NotificationsFilter() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
        <Check className="h-4 w-4" />
        Mark all read
      </Button>
    </div>
  )
}

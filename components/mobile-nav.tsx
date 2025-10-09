"use client"

import { useState } from "react"
import { Menu, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <nav className="flex flex-col gap-1 p-4">
                <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="/browse" className="flex items-center gap-2 px-3 py-2 text-sm">
                  Browse Aukiers
                </a>
                <a href="/post-job" className="flex items-center gap-2 px-3 py-2 text-sm">
                  Post a Job
                </a>
                <a href="/how-it-works" className="flex items-center gap-2 px-3 py-2 text-sm">
                  How It Works
                </a>
                <div className="my-2 h-px bg-border" />
                <a href="/login" className="flex items-center gap-2 px-3 py-2 text-sm">
                  Sign In
                </a>
                <a href="/signup" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary">
                  Join as Aukier
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-lg font-bold">Aukier</span>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 text-[10px]" variant="destructive">
              3
            </Badge>
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

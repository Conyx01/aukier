"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Bell, User, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    browse: false,
    jobs: false,
    about: false
  })

  const toggleMobileDropdown = (dropdown: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Logo size="md" showText={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Browse Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Browse
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/browse">All Aukiers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/browse?category=plumbing">Plumbers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/browse?category=electrical">Electricians</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/browse?category=carpentry">Carpenters</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/browse?category=mechanical">Mechanics</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/browse?category=design">Designers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/browse?category=development">Developers</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/browse?category=other">Other Services</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Jobs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Jobs
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/jobs">Browse Jobs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/post-job">Post a Job</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/jobs?type=urgent">Urgent Jobs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/jobs?type=remote">Remote Jobs</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/jobs?type=local">Local Jobs</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* How It Works */}
          <Link href="/how-it-works">
            <Button variant="ghost">How It Works</Button>
          </Link>

          {/* Reviews */}
          <Link href="/reviews">
            <Button variant="ghost">Reviews</Button>
          </Link>

          {/* About */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                About
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/about">Our Story</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/trust-safety">Trust & Safety</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pricing">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/help">Help Center</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/contact">Contact Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search Button - Mobile Only */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Authenticated User Actions */}
          {isAuthenticated ? (
            <>
              {/* Notifications */}
              <Link href="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 text-[10px]" variant="destructive">
                    3
                  </Badge>
                  <span className="sr-only">Notifications</span>
                </Button>
              </Link>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5 border-b">
                    <p className="text-sm font-semibold">{user?.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/messages">Messages</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/notifications">Notifications</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  {user?.role === "aukier" && (
                    <DropdownMenuItem asChild>
                      <Link href="/subscription">Subscription</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => {
                      logout()
                      router.push("/")
                    }}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            /* CTA Buttons - Desktop Only (when not authenticated) */
            <div className="hidden md:flex items-center gap-2 ml-4">
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Join as Aukier</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo size="md" showText={true} />
                  </Link>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Main navigation menu for Aukier platform</SheetDescription>
                </div>
              </SheetHeader>
              <div className="flex flex-col h-full">

                {/* Mobile Navigation */}
                <nav className="flex-1 p-4">
                  <div className="space-y-1">
                    {/* Browse Section */}
                    <div className="py-2">
                      <button
                        onClick={() => toggleMobileDropdown('browse')}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider hover:bg-accent rounded-md"
                      >
                        Browse
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdowns.browse ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdowns.browse && (
                        <div className="ml-4 space-y-1">
                          <Link href="/browse" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            All Aukiers
                          </Link>
                          <Link href="/browse?category=plumbing" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Plumbers
                          </Link>
                          <Link href="/browse?category=electrical" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Electricians
                          </Link>
                          <Link href="/browse?category=carpentry" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Carpenters
                          </Link>
                          <Link href="/browse?category=mechanical" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Mechanics
                          </Link>
                          <Link href="/browse?category=design" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Designers
                          </Link>
                          <Link href="/browse?category=development" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Developers
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Jobs Section */}
                    <div className="py-2">
                      <button
                        onClick={() => toggleMobileDropdown('jobs')}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider hover:bg-accent rounded-md"
                      >
                        Jobs
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdowns.jobs ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdowns.jobs && (
                        <div className="ml-4 space-y-1">
                          <Link href="/jobs" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Browse Jobs
                          </Link>
                          <Link href="/post-job" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Post a Job
                          </Link>
                          <Link href="/jobs?type=urgent" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Urgent Jobs
                          </Link>
                          <Link href="/jobs?type=remote" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Remote Jobs
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Direct Links */}
                    <div className="py-2">
                      <Link href="/how-it-works" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                        How It Works
                      </Link>
                      <Link href="/reviews" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                        Reviews
                      </Link>
                    </div>

                    {/* About Section */}
                    <div className="py-2">
                      <button
                        onClick={() => toggleMobileDropdown('about')}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider hover:bg-accent rounded-md"
                      >
                        About
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdowns.about ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdowns.about && (
                        <div className="ml-4 space-y-1">
                          <Link href="/about" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Our Story
                          </Link>
                          <Link href="/trust-safety" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Trust & Safety
                          </Link>
                          <Link href="/pricing" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Pricing
                          </Link>
                          <Link href="/help" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Help Center
                          </Link>
                          <Link href="/contact" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact Us
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </nav>

                {/* Mobile CTA Buttons */}
                {!isAuthenticated ? (
                  <div className="p-4 border-t">
                    <div className="space-y-2">
                      <Link href="/login" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/signup" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full">
                          Join as Aukier
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 border-t">
                    <div className="space-y-2">
                      <div className="px-3 py-2 border-b mb-2">
                        <p className="text-sm font-semibold">{user?.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
                      </div>
                      <Link href="/profile" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full justify-start">
                          My Profile
                        </Button>
                      </Link>
                      <Link href="/dashboard" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full justify-start">
                          Dashboard
                        </Button>
                      </Link>
                      <Link href="/messages" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full justify-start">
                          Messages
                        </Button>
                      </Link>
                      <Link href="/settings" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full justify-start">
                          Settings
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        className="w-full mt-4"
                        onClick={() => {
                          logout()
                          setIsMobileMenuOpen(false)
                          router.push("/")
                        }}
                      >
                        Sign Out
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

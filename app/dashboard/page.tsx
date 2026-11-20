"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MessageCircle, Bell, TrendingUp, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  // Mock data - replace with real data from API
  const stats = {
    activeJobs: user.role === "client" ? 3 : 5,
    messages: 12,
    notifications: 3,
    completedJobs: user.role === "client" ? 8 : 15,
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.name}! Here's what's happening with your account.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active {user.role === "client" ? "Jobs" : "Applications"}</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeJobs}</div>
              <p className="text-xs text-muted-foreground">Currently {user.role === "client" ? "posted" : "applied to"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.messages}</div>
              <p className="text-xs text-muted-foreground">Unread messages</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notifications</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.notifications}</div>
              <p className="text-xs text-muted-foreground">New notifications</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedJobs}</div>
              <p className="text-xs text-muted-foreground">Total completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {user.role === "client" ? (
                <>
                  <Link href="/post-job" className="block">
                    <Button className="w-full justify-start">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Post a New Job
                    </Button>
                  </Link>
                  <Link href="/jobs" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      View My Jobs
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/jobs" className="block">
                    <Button className="w-full justify-start">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Browse Jobs
                    </Button>
                  </Link>
                  <Link href="/profile" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Update Profile
                    </Button>
                  </Link>
                </>
              )}
              <Link href="/messages" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  View Messages
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New message from John</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <Badge variant="secondary">New</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Job application received</p>
                    <p className="text-sm text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Profile view</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Role-specific content */}
        {user.role === "aukier" && (
          <Card>
            <CardHeader>
              <CardTitle>Your Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete your profile to improve your visibility and get more job opportunities.
              </p>
              <Link href="/profile">
                <Button>Complete Profile</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}





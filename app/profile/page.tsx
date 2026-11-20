"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Phone, Mail, MapPin, Edit, Shield, Briefcase } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
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

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your profile information and preferences</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Profile Information</CardTitle>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <Badge variant={user.role === "aukier" ? "default" : "secondary"} className="mt-1">
                    {user.role === "aukier" ? "Aukier" : "Client"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone Number</div>
                    <div className="font-medium">{user.phone}</div>
                  </div>
                </div>

                {user.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email Address</div>
                      <div className="font-medium">{user.email}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Verification Status</div>
                    <Badge variant={user.verified ? "default" : "outline"}>
                      {user.verified ? "Verified" : "Not Verified"}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/dashboard" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/settings" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </Link>
              {user.role === "aukier" && (
                <Link href="/subscription" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Subscription
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Sections based on role */}
        {user.role === "aukier" && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Aukier Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete your Aukier profile to start receiving job opportunities.
              </p>
              <Link href={`/aukier/${user.id}`}>
                <Button>View Public Profile</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {user.role === "client" && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Client Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Manage your job postings and connect with Aukiers.
              </p>
              <Link href="/post-job">
                <Button>Post a Job</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}





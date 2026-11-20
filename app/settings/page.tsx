"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Shield, Globe, Moon, Sun } from "lucide-react"
import { toast } from "sonner"

export default function SettingsPage() {
  const { user, isAuthenticated, updateUser } = useAuth()
  const router = useRouter()
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    jobAlerts: true,
    messages: true,
  })
  const [language, setLanguage] = useState("en")
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  const handleSave = () => {
    // In real app, this would save to backend
    toast.success("Settings saved successfully!")
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Update your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue={user.phone} />
              </div>
              {user.email && (
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
              )}
              <Button onClick={handleSave}>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch checked={notifications.email} onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, email: checked })
                } />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                </div>
                <Switch checked={notifications.sms} onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, sms: checked })
                } />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications</p>
                </div>
                <Switch checked={notifications.push} onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, push: checked })
                } />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Job Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified about new job opportunities</p>
                </div>
                <Switch checked={notifications.jobAlerts} onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, jobAlerts: checked })
                } />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Message Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get notified about new messages</p>
                </div>
                <Switch checked={notifications.messages} onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, messages: checked })
                } />
              </div>
              <Button onClick={handleSave}>Save Preferences</Button>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>Manage your privacy and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Profile Visibility</Label>
                <Select value="public" onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="contacts">Contacts Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Change Password</Label>
                <Button variant="outline">Change Password</Button>
              </div>
              <Button onClick={handleSave}>Save Settings</Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Preferences
              </CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ny">Chichewa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        Light
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        Dark
                      </div>
                    </SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleSave}>Save Preferences</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}





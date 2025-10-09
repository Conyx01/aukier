"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Briefcase, Star, DollarSign, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"

const notifications = [
  {
    id: 1,
    type: "message",
    icon: MessageSquare,
    title: "New message from Chisomo Banda",
    description: "Replied to your inquiry about the plumbing job",
    time: "5 minutes ago",
    read: false,
    avatar: "/african-plumber.jpg",
  },
  {
    id: 2,
    type: "proposal",
    icon: Briefcase,
    title: "New proposal received",
    description: "Thandiwe Phiri sent a proposal for 'Office Electrical Wiring Repair'",
    time: "1 hour ago",
    read: false,
    avatar: "/african-electrician.jpg",
  },
  {
    id: 3,
    type: "review",
    icon: Star,
    title: "New review received",
    description: "Sarah Mwanza left you a 5-star review",
    time: "3 hours ago",
    read: false,
    avatar: "/client-1.jpg",
  },
  {
    id: 4,
    type: "payment",
    icon: DollarSign,
    title: "Payment received",
    description: "MWK 8,500 for 'Bathroom Pipe Leak Repair'",
    time: "1 day ago",
    read: true,
  },
  {
    id: 5,
    type: "job-complete",
    icon: CheckCircle2,
    title: "Job marked as complete",
    description: "Mphatso Mwale completed 'Custom Furniture Build'",
    time: "2 days ago",
    read: true,
    avatar: "/african-carpenter.jpg",
  },
  {
    id: 6,
    type: "reminder",
    icon: AlertCircle,
    title: "Job starting soon",
    description: "Your job 'Kitchen Renovation Plumbing' starts tomorrow",
    time: "2 days ago",
    read: true,
  },
  {
    id: 7,
    type: "message",
    icon: MessageSquare,
    title: "New message from Grace Tembo",
    description: "Sent you a message about design project timeline",
    time: "3 days ago",
    read: true,
    avatar: "/african-designer.jpg",
  },
]

const typeColors = {
  message: "bg-blue-500/10 text-blue-500",
  proposal: "bg-green-500/10 text-green-500",
  review: "bg-yellow-500/10 text-yellow-500",
  payment: "bg-primary/10 text-primary",
  "job-complete": "bg-green-500/10 text-green-500",
  reminder: "bg-orange-500/10 text-orange-500",
}

export function NotificationsList() {
  const [notificationsList, setNotificationsList] = useState(notifications)

  const markAsRead = (id: number) => {
    setNotificationsList(notificationsList.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <div className="space-y-3">
      {notificationsList.map((notification) => {
        const Icon = notification.icon
        return (
          <Card
            key={notification.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              !notification.read ? "border-primary/50 bg-primary/5" : ""
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex gap-3 p-4">
              {notification.avatar ? (
                <Avatar className="h-12 w-12">
                  <AvatarImage src={notification.avatar || "/placeholder.svg"} alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ) : (
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
                    typeColors[notification.type as keyof typeof typeColors]
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-tight">{notification.title}</h3>
                  {!notification.read && <Badge className="flex-shrink-0 h-2 w-2 rounded-full p-0" />}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{notification.description}</p>
                <p className="mt-2 text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

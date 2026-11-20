"use client"

import Link from "next/link"
import { MapPin, Clock, DollarSign, User, Calendar, Users, Eye, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Job {
  id: string
  title: string
  description: string
  category: string
  budget: string
  urgency: string
  location: string
  specificArea: string
  timeline: string
  skills: string[]
  contactMethod: string
  phoneNumber: string
  postedBy: string
  postedAt: Date
  status: string
  applicants: number
  views: number
}

interface JobCardProps {
  job: Job
  showApplyButton?: boolean
  className?: string
}

const urgencyLevels = [
  { id: "low", name: "Low", color: "bg-green-100 text-green-800" },
  { id: "medium", name: "Medium", color: "bg-yellow-100 text-yellow-800" },
  { id: "high", name: "High", color: "bg-orange-100 text-orange-800" },
  { id: "urgent", name: "Urgent", color: "bg-red-100 text-red-800" }
]

const budgetRanges = [
  { id: "under-5000", name: "Under MWK 5,000" },
  { id: "5000-10000", name: "MWK 5,000 - 10,000" },
  { id: "10000-25000", name: "MWK 10,000 - 25,000" },
  { id: "25000-50000", name: "MWK 25,000 - 50,000" },
  { id: "over-50000", name: "Over MWK 50,000" },
  { id: "negotiable", name: "Negotiable" }
]

export function JobCard({ job, showApplyButton = true, className }: JobCardProps) {
  const getUrgencyBadge = (urgency: string) => {
    const level = urgencyLevels.find(l => l.id === urgency)
    return level ? (
      <Badge className={level.color}>
        {level.name}
      </Badge>
    ) : null
  }

  const getBudgetDisplay = (budget: string) => {
    const range = budgetRanges.find(r => r.id === budget)
    return range ? range.name : budget
  }

  const getTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      plumbing: "🔧",
      electrical: "⚡",
      carpentry: "🪚",
      mechanical: "🔩",
      design: "🎨",
      development: "💻",
      cleaning: "🧹",
      gardening: "🌱",
      other: "🛠️"
    }
    return icons[category] || "🛠️"
  }

  const isUrgent = job.urgency === "urgent" || job.urgency === "high"

  return (
    <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer group ${isUrgent ? 'border-red-200 bg-red-50/30' : ''} ${className}`}>
      <Link href={`/jobs/${job.id}`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{getCategoryIcon(job.category)}</span>
              <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                {job.title}
              </h3>
            </div>
            {getUrgencyBadge(job.urgency)}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{job.postedBy}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{getTimeAgo(job.postedAt)}</span>
            </div>
          </div>
        </CardHeader>
      </Link>
      
      <CardContent className="pt-0">
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {job.description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{job.location}, {job.specificArea}</span>
        </div>

        {/* Budget & Timeline */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold">
              {getBudgetDisplay(job.budget)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="capitalize">{job.timeline}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {job.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{job.applicants} applicants</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{job.views} views</span>
            </div>
          </div>
          {isUrgent && (
            <Badge variant="destructive" className="text-xs">
              <Clock className="h-3 w-3 mr-1" />
              Urgent
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {showApplyButton && (
            <Button className="flex-1" size="sm">
              Apply Now
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link href={`/jobs/${job.id}`}>
              View Details
            </Link>
          </Button>
          {job.contactMethod === "whatsapp" && (
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}








